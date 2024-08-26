import './MovieDetails.css'
import backArrow from '../../assets/backArrow.png'
import MovieDisplay from '../MovieDisplay/MovieDisplay'
import { useEffect, useState } from 'react'

const MovieDetails = ({movieInfo, goBack}) => {

  const [apiMovie, setApiMovie] = useState('')


  const movieFacts = movieInfo.movie
  // This converts the data to include commas
  const newFormatedNum = (num) => {
    return Number(num).toLocaleString()
  }

  

  // we can have the api for details here
  useEffect(() => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860') //<- the id will be depending on the id from App
    .then(response => response.json())
    .then(data => setApiMovie(data.movie))
    .catch(err => console.log(err))
  },[])

  return (
    <div className='movie-container' 
      style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original//${apiMovie.backdrop_path})`}}
    >
      <div className='movie-wrap'>
        {/* <img src={backArrow} alt='' onClick={goBack} className='back-arrow'/> */}
        <div className='movies'>
          <img src={apiMovie.poster_path} alt='' />
        </div>
        <div className='moive-details'>
          {/* <h2>{movieFacts.title}</h2>
          <p><span>Rating: </span>{movieFacts.average_rating}</p>
          <p><span>Overview: </span>{movieFacts.overview}</p>
          <p><span>Overview: </span>{movieFacts.genres.join(', ')}</p>
          <p><span>Release Date: </span>{movieFacts.release_date}</p>
          <p><span>Budget: </span>${newFormatedNum(movieFacts.budget)}</p>
          <p><span>Revenue: </span>${newFormatedNum(movieFacts.revenue)}</p>
          <p><span>Runtime: </span>{movieFacts.runtime} Minutes</p>
          <p><span>Tagline: </span>{movieFacts.tagling}</p> */}
          <h2>{apiMovie.title}</h2>
          <p><span>Rating: </span>{apiMovie.average_rating}</p>
          <p><span>Overview: </span>{apiMovie.overview}</p>
          <p><span>Overview: </span>{apiMovie.genres}</p>
          <p><span>Release Date: </span>{apiMovie.release_date}</p>
          <p><span>Budget: </span>${newFormatedNum(apiMovie.budget)}</p>
          <p><span>Revenue: </span>${newFormatedNum(apiMovie.revenue)}</p>
          <p><span>Runtime: </span>{apiMovie.runtime} Minutes</p>
          <p><span>Tagline: </span>{apiMovie.tagline}</p>
        <MovieDisplay />
      </div>
      </div>
      {/* <div className='movie-display'>
        <MovieDisplay />
      </div> */}
    </div>
  )
}

export default MovieDetails