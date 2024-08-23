import { useState } from "react";
import "./MovieDisplay.css";

function MovieDisplay() {
  const [apiMovies, setApiMovies] = useState([])

  useEffect(() => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos')
    .then(response => response.json())
    .then(data => setApiMovies(data.videos))
    .catch(error => setError('Sorry but our server is down!', error))
  },[])

  return(
    <section className="movie-carosel">
      <div>
        <iframe src={`https://www.youtube.com/embed/${apiMovies.id}`} height='200' width='300'></iframe>
      </div>
    </section>
  );
};

export default MovieDisplay;