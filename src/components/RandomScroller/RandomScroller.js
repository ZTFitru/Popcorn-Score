import "./RandomScroller.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import movieData from "../../Data/Data.js";

function RandomScroller({ apiMovies }) {
  // console.log(movieData)

  const [currentIndex, setCurrentIndex] = useState(0);

  const [movieList, setMovieList] = useState([])
  
  // const randomList = []
  
  // function getRandomIndex(array) {
  //   return Math.floor(Math.random() * array.length);
  // }
  
  
  // function getRandomMovies(array) {
  //   var index =  getRandomIndex(array);
  //   return array[index];
  // }
    
  
  function getRandomMovies(array, movie) {
    var index = [...array].sort(() => 0.5 - Math.random());
    return index.slice(0, movie);
  }
  
  useEffect(() => {
    if(apiMovies.length) {
      setMovieList(getRandomMovies(apiMovies, 5));
    }
  }, [apiMovies]);
  
  // console.log(movieList, '<-- HERE')
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movieList.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [movieList])


  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % randomList.length)
  //   }, 3000);

  //   return () => clearInterval(intervalId)
  // }, [currentIndex]);
  
  // for(let i = 0; i < 5; i++) {
  //   // console.log('Yo!')
  //   let result = getRandomMovies(movieData.movies);
  //   // console.log(result, '<-- THERE')
  //   if(randomList.includes(result)) {
  //     let result2 = getRandomMovies(movieData.movies);
  //     randomList.push(result2)
  //   } else {
  //     randomList.push(result)
  //   }
  // }

  // console.log(randomList[0], '<-- HERE')
  
  // a random function that will pick random movies from the api movies 
  // copy the api fetch from the title and paste here 

  /*
  function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomMember(array2) {
  var index = getRandomIndex(array2);
  return array2[index];
}
  */ 


  return(
    // <section className="random-carousel">
    //   /* some stuff... */
    // </section>

    <div className="outer-container">
        {movieList.map((movie, index) => (
          <Link to={ `/movies/${movie.id}` } 
            key={index} 
            className={`container ${currentIndex === index ? 
            "currentIndex" : "currentIndex currentIndex-hidden"}`}>
              <img src={movie.poster_path} alt={movie.title} className="random-movie-img"/>
              <p className={"random-movie-title" + ' ' + movie.title}>{movie.title}</p>
          </Link>
        ))}
      <span className="movie-index-dots">
        {movieList.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} 
            className={currentIndex === index ? 
            "index-dot" : "index-dot index-dot-inactive"}>*</button>
        ))}
      </span>
    </div>

    // <div className='container'>
    //     <div >
    //         <img src={randomList[0].poster_path} alt={randomList[0].title} className='random-movie'/>
    //    </div>
    //     <div >
    //         <img src={randomList[1].poster_path} alt={randomList[1].title} className='random-movie'/>    
    //     </div>
    //     <div >
    //         <img src={randomList[2].poster_path} alt={randomList[2].title} className='random-movie'/>
    //     </div>
    //     <div >
    //         <img src={randomList[3].poster_path} alt={randomList[3].title} className='random-movie'/>
    //     </div>
    //     <div >
    //         <img src={randomList[4].poster_path} alt={randomList[4].title} className='random-movie'/>
    //     </div>
    // </div>
  );
};



/*
.container {
    margin: 100px auto;
    width: 70%;
    height: 450px;
    display: flex;
    justify-content: center;
    gap: 10px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        border: 2px solid rgba(255, 255, 255, 0.6);
        transition: all ease-in-out 0.5s;
        cursor: pointer;
    }
    a {
        display: inline-block;
        width: 10%;
        height: 100%;
    }
}

*/ 

export default RandomScroller;