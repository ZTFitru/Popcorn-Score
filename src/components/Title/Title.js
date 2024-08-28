import './Title.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Title() {

  const [movieInput, setMovieInput] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([])
  const [userType, setUserType] = useState(false)
  const [apiMovies, setApiMovies] = useState([])
  const [error, setError] = useState('')


useEffect(() => {
    const getMovies = async () => {
        try {
            const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
            const data = await response.json();
            setApiMovies(data.movies);
        } catch (error) {
            setError('Sorry but our server is down!')
        }
    }
    getMovies();

},[])

useEffect(() => {
    if(movieInput) {
        const result = apiMovies.filter(movie => 
            movie.title.toLowerCase().includes(movieInput.toLowerCase())
        )
        setFilteredMovies(result)
        setUserType(true) // the movies would'nt come back
    } else {
        setFilteredMovies(apiMovies)
        setUserType(false) // just set to false
    }
}, [movieInput, apiMovies])

  

return (
    <main className="App">
      {error && <p className='error-message'>{error}</p>}
      <section className="main-page-cont">
          <div className='search-input'>
            <input type='text' className='input-search' placeholder='Search Movie...' value={movieInput} onChange={(event) => setMovieInput(event.target.value)}/>
          </div>
          <div className='movie-list'>
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <Link to={`/movies/${movie.id}`} className='movie' key={movie.id}>
                  <img src={movie.poster_path} alt={`Poster of the movie ${movie.title}`} />
                  <p>{movie.title}</p>
                  <p>⭐️ {movie.average_rating.toFixed(1)}</p>
                </Link>
              ))
            ) : (
              <p>We aint got the movie....try again</p>
            )}
          </div>
        </section>
    </main>
  );
};

export default Title;