import './CardDetails.css'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const CardDetail = () => {

  const { id } = useParams()
  const [apiMovie, setApiMovie] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()


  useEffect(() => {
    const getMovie = async () => {
        try {
            const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`);
            const data = await response.json();
            setApiMovie(data.movie);
        } catch (error) {
            setError('Sorry but our server is down!')
        }
    }
    getMovie();

},[id])

  const showVideo = () => {
    navigate(`/movies/${id}/videos`)
  }

  return (
    <div >
      <div className='movie-container' 
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original//${apiMovie.backdrop_path})`}}>
      {error && <p className='error-message'>{error}</p>}
      <div className='movie-wrap'>
        <div className='movies'>
          <img src={apiMovie.poster_path} alt='' />
        </div>
        <div className='movie-details'>
          <h2>{apiMovie.title}</h2>
          <p><span>Rating: </span>{apiMovie.average_rating}</p>
          <p><span>Overview: </span>{apiMovie.overview}</p>
          <p><span className='tag'>Genre: </span>{apiMovie.genres}</p>
          <p><span>Release Date: </span>{apiMovie.release_date}</p>
          <p><span>Runtime: </span>{apiMovie.runtime} Minutes</p>
          <p><span>Tagline: </span>{apiMovie.tagline}</p>
          <button onClick={showVideo}>Trailers & Clips</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default CardDetail