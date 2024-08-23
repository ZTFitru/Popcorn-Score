import './MovieDetails.css'
import backArrow from '../../assets/backArrow.png'
import { useState, useEffect } from 'react'

const MovieDetails = ({movieInfo, goBack}) => {
  // console.log(movieInfo)
  const [apiMovies, setApiMovies] = useState([])
  console.log('this api: ', apiMovies)
  const [error, setError] = useState('')


  const movieFacts = movieInfo.movie
  // This converts the data to include commas
  const newFormatedNum = (num) => {
    return Number(num).toLocaleString()
  }

  

  useEffect(() => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos')
    .then(response => response.json())
    .then(data => setApiMovies(data.videos))
    .catch(error => setError('Sorry but our server is down!', error))
  },[])

  return (
    <div className='movie-container' >
      <img src={backArrow} alt='' onClick={goBack}/>
      {error && <p>{error}</p>}
      <div className='movie'>
        <img src={movieFacts.poster_path} alt='' />
      </div>
      <div className='moive-details'>
        <h2>{movieFacts.title}</h2>
        <p><span>Rating: </span>{movieFacts.average_rating}</p>
        <p><span>Overview: </span>{movieFacts.overview}</p>
        <p><span>Overview: </span>{movieFacts.genres.join(', ')}</p>
        <p><span>Release Date: </span>{movieFacts.release_date}</p>
        <p><span>Budget: </span>${newFormatedNum(movieFacts.budget)}</p>
        <p><span>Revenue: </span>${newFormatedNum(movieFacts.revenue)}</p>
        <p><span>Runtime: </span>{movieFacts.runtime} Minutes</p>
        <p><span>Tagline: </span>{movieFacts.tagling}</p>
        <iframe src={`https://www.youtube.com/embed/${apiMovies.key}`} height='90%' width='90%' title="Black Adam Featurette"></iframe>
      </div>
      {/* <div>
        <iframe src={`https://www.youtube.com/embed/${apiMovies.key}`} height='90%' width='90%' title="Black Adam Featurette"></iframe>
      </div> */}
    </div>
  )
}

export default MovieDetails