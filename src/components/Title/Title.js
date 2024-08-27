import './Title.css'
import MovieDetails from '../MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Title({selections}) {

  const [userMovie, setUserMovie] = useState(null)
  const [apiMovies, setApiMovies] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => setApiMovies(data.movies))
    .catch(error => setError('Sorry but our server is down!'))
  },[])

  

  return (
    <main className="App">
      {error && <p>{error}</p>}
      {userMovie ? (
        <MovieDetails selections={'movies'}/>
      ) : ( <section className="main-page-cont">
        <div className='search-input'>
          <input type='text' className='input-search' placeholder='Search Movie...' />
          <button className='search-btn'>Search</button>
        </div>
          <div className='movie-list'>
            {apiMovies.map((movie) => (
                <Link to={`/movies/${movie.id}`} className='movie' key={movie.id}>
                <img src={movie.poster_path} alt={`Poster of the movie ${movie.title}`}  />
                <p>{movie.title}</p>
                <p>⭐️ {movie.average_rating.toFixed(1)}</p>
              </Link>
            ))}
          </div>
        </section>
        )}
    </main>
  );
};

export default Title;