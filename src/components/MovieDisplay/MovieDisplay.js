import { useState, useEffect } from "react";
import "./MovieDisplay.css";
import { useParams } from "react-router-dom";

const MovieDisplay = () => {
  const { movie_id } = useParams()
  const [apiMovie, setApiMovie] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    const getMovieFilms = async () => {
        try {
            const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie_id}/videos`);
            const data = await response.json();
            setApiMovie(data.videos);
        } catch (error) {
            setError('Sorry but our server is down!')
        }
    }
    getMovieFilms();

},[movie_id])

  return(
    <div className="trailer-cont">
      {error && <p className='error-message'>{error}</p>}
      <div className="trailer">
      {apiMovie.map((movie) => (
        <div key={movie.key}>
          <h1>{movie.type}</h1>
          <iframe src={`https://www.youtube.com/embed/${movie.key}`} width={300} height={200} title={movie.type} allowFullScreen></iframe>
        </div>
      ))}
      {apiMovie.length === 0 && <p>No videos available</p>}
      </div>
    </div>
  );
};

export default MovieDisplay;