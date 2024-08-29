import "./RandomScroller.css";
import { useState } from "react";
// import { Link, useParams } from "react-router-dom";
import movieData from "../../Data/Data.js";

function RandomScroller() {
  // console.log(movieData)

  const [currentIndex, setCurrentIndex] = useState(0);

  const randomList = []
  
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  
  function getRandomMember(array) {
    var index = getRandomIndex(array);
    return array[index];
  }
  
  for(let i = 0; i < 5; i++) {
    // console.log('Yo!')
    let result = getRandomMember(movieData.movies);
    // console.log(result, '<-- THERE')
    if(randomList.includes(result)) {
      let result2 = getRandomMember(movieData.movies);
      randomList.push(result2)
    } else {
      randomList.push(result)
    }
  }

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
      <div className="container">
        {randomList.map((movie, index) => {
          return (<img src={movie.poster_path} alt={movie.title} key={index} className={currentIndex === index ? "currentIndex" : "currentIndex currentIndex-hidden"} />)
        })}
      </div>
      <span className="movie-index-dots">
        {randomList.map((_, index) => {
          return <button key={index} onClick={() => setCurrentIndex(index)} className={currentIndex === index ? "index-dot" : "index-dot index-dot-inactive"} >*</button>
        })}
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