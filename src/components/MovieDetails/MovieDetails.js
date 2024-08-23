import './MovieDetails.css'
import backArrow from '../../assets/backArrow.png'

const MovieDetails = ({movieInfo, goBack}) => {
  console.log(movieInfo)

  const movieFacts = movieInfo.movie
  // This converts the data to include commas
  const newFormatedNum = (num) => {
    return Number(num).toLocaleString()
  }

  return (
    <div className='movie-container' >
      <img src={backArrow} alt='' onClick={goBack}/>
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
      </div>
      
      {/* <iframe src='https://www.youtube.com/embed' height='200' width='300' title=''>
      </iframe> */}
    </div>
  )
}

export default MovieDetails