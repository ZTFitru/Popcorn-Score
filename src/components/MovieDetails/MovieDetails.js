import './MovieDetails.css'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const MovieDetails = () => {

  const { id } = useParams()
  const [apiMovie, setApiMovie] = useState('')
  const navigate = useNavigate()

  
  
  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => setApiMovie(data.movie))
    .catch(err => console.log(err))
  },[id])

  const showVideo = () => {
    navigate(`/movies/${id}/videos`)
  }

  return (
    <div className='movie-container' 
      style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original//${apiMovie.backdrop_path})`}}
    >
      <div className='movie-wrap'>
        <div className='movies'>
          <img src={apiMovie.poster_path} alt='' />
        </div>
        <div className='movie-details'>
          <h2>{apiMovie.title}</h2>
          <p><span>Rating: </span>{apiMovie.average_rating}</p>
          <p><span>Overview: </span>{apiMovie.overview}</p>
          <p><span>Overview: </span>{apiMovie.genres}</p>
          <p><span>Release Date: </span>{apiMovie.release_date}</p>
          <p><span>Runtime: </span>{apiMovie.runtime} Minutes</p>
          <p><span>Tagline: </span>{apiMovie.tagline}</p>
          <button onClick={showVideo}>Trailers & Clips</button>
      </div>
      </div>
    </div>
  )
}

export default MovieDetails