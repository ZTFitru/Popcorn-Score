import { useState, useEffect } from "react";
import "./MovieDisplay.css";
import { useParams } from "react-router-dom";

function MovieDisplay() {
  const { movie_id } = useParams()
  const [apiMovies, setApiMovies] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie_id}/videos`)
    .then(response => response.json())
    .then(data => setApiMovies(data.videos))
    .catch(error => setError('Sorry but our server is down!', error))
  },[movie_id])

  return(
    <div className="trailer">
      {apiMovies.map((movie) => (
        <div key={movie.key}>
          <h3>{movie.type}</h3>
          <iframe src={`https://www.youtube.com/embed/${movie.key}`} title={movie.type} allowFullScreen></iframe>
        </div>
      ))}
      {apiMovies.length === 0 && <p>No videos available</p>}
    </div>
  );
};

export default MovieDisplay;