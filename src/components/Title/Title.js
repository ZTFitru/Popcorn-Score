import './Title.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RandomScroller from '../RandomScroller/RandomScroller';

function Title({apiMovies, error}) {

  const [movieInput, setMovieInput] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([])
  const [userType, setUserType] = useState(false)
  // const [apiMovies, setApiMovies] = useState([])
  // const [error, setError] = useState('')


  // useEffect(() => {
  //     const getMovies = async () => {
  //         try {
  //             const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
  //             if(!response.ok) {
  //               throw new Error('Bad Network')
  //             }
  //             const data = await response.json();
  //             setApiMovies(data.movies);
  //         } catch (error) {
  //             setError('Sorry but our server is down!')
  //         }
  //     }
  //     getMovies();

  // },[])

  useEffect(() => {
      if(movieInput) {
          const result = apiMovies.filter(movie => 
              movie.title.toLowerCase().includes(movieInput.toLowerCase())
          )
          setFilteredMovies(result)
          setUserType(true) 
      } else {
          setFilteredMovies(apiMovies)
          setUserType(false) 
      }
  }, [movieInput, apiMovies])

  

  return (
    <main className="App">
      {error && <p className='error-message'>{error}</p>}
      <section className="main-page-cont">
        <RandomScroller apiMovies={ apiMovies }/>
        <div className='search-input'>
          <input 
            type='text' 
            className='input-search' 
            placeholder='Search Movie...' 
            value={movieInput} onChange={(event) => setMovieInput(event.target.value)}/>
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
            <p className='no-movie-message'>We aint got the movie....try again</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Title;