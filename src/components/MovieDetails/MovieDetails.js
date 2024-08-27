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
    // <div className='movie-container' 
    //   style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original//${apiMovie.backdrop_path})`}}
    // >
    //   <div className='movie-wrap'>
    //       <img src={apiMovie.poster_path} alt='' className='movie-main-poster'/>
    //     <div className='moive-details'>
    //       <h2>{apiMovie.title}</h2>
    //       <p><span>Rating: </span>{apiMovie.average_rating}</p>
    //       <p><span>Overview: </span>{apiMovie.overview}</p>
    //       <p><span>Overview: </span>{apiMovie.genres}</p>
    //       <p><span>Release Date: </span>{apiMovie.release_date}</p>
    //       <p><span>Runtime: </span>{apiMovie.runtime} Minutes</p>
    //       <p><span>Tagline: </span>{apiMovie.tagline}</p>
    //       <button onClick={showVideo}>Trailers & Clips</button>
    //     </div>
    //   </div>
    // </div>
    <div className="outer-container" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${apiMovie.backdrop_path}")` }}>
      {/* <div className="inner-container">
        <img src={apiMovie.poster_path} alt="" className="movie-main-poster" />
      </div> */}
      <div className="movie-card">
        <div className="hero">
          <img src={apiMovie.poster_path} alt="cover" className="cover" />
          <div className="details">
            <div className="title1">
              {apiMovie.title} <span>{apiMovie.rating}</span>
            </div>
            <p><span>Rating: </span>{apiMovie.average_rating}</p>
          </div>
        </div>
        <div className="description">
          <div className="column1">
          <span class="tag">{apiMovie.genres}</span>
          </div>
          <div className="column2">
            <p><span>Overview: </span>{apiMovie.overview}</p>
          </div>
        </div>
        <button onClick={showVideo}>Trailers & Clips</button>
      </div>
    </div>
  )
}

export default MovieDetails