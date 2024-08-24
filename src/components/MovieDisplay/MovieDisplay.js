import { useState, useEffect } from "react";
import "./MovieDisplay.css";

function MovieDisplay() {
  const [apiMovies, setApiMovies] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos')
    .then(response => response.json())
    .then(data => setApiMovies(data.videos))
    .catch(error => setError('Sorry but our server is down!', error))
  },[])

  return(
    <div className="trailer">
      {error && <p>{error}</p>}
      <iframe src={`https://www.youtube.com/embed/${apiMovies.key}`} height='100%' width='90%' title="Black Adam Featurette"></iframe>
    </div>
  );
};

export default MovieDisplay;