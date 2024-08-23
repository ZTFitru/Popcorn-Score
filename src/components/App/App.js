import './App.css';
import Navbar from '../Navbar/Navbar';
import movieData from '../../Data/Data';
import Footer from '../Footer/Footer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { useState } from 'react';

function App() {

  const [userMovie, setUserMovie] = useState(null)

  const movieList = movieData.movies
  const dummyData = {
    'movie': {
      id: 1,
      title: 'Rush Hour',
      poster_path: 'https://image.tmdb.org/t/p/original/nwPhAsfnb7f46bZkWLG7IRP5HXr.jpg',
      backdrop_path: 'https://image.tmdb.org/t/p/original/7j7IrTHT1pJaVsIJjsGVSNxUPhY.jpg',
      release_date: '1998-18-09',
      overview: "When Hong Kong Inspector Lee is summoned to Los Angeles to investigate a kidnapping, the FBI doesn't want any outside help and assigns cocky LAPD Detective James Carter to distract Lee from the case. Not content to watch the action from the sidelines, Lee and Carter form an unlikely partnership and investigate the case themselves.",
      average_rating: '7',
      genres: ['Action', 'Comedy', 'Crime'],
      budget: '33000000',
      revenue: '244721064',
      runtime: '98',
      tagling: 'The fastest hands in the East meet the biggest mouth in the West.'
    }
  }

  const userMovieSelection = (movie) => {
    setUserMovie(dummyData)
  }

  const homePageView = () => {
    setUserMovie(null)
  }

  
  return (
    <main className="App">
      <Navbar />
      {/* The way we are using the operator '?'
          -> if the user selects a movie render 'userMovie'
          -> 'userMovie' is passed as a PROP to 'MovieDetails'
          -> but if nothing happens or the page loads the <section> is rendered
      */}
      {userMovie ? (
        // The 'goBack' is passed as a PROP to 'MovieDetails' 
        // the function 'homePageView' to clear the selection to go back to the main page
        // In the 'MovieDetails' page when the click happens the function is invoked to set it to null
        <MovieDetails movieInfo={userMovie} goBack={homePageView}/>
      ) : <section className="main-page-cont">
          <div className='movie-list'>
            {movieList.map((movie, index) => {
              // The 'key' is a unique identifier 
              return <div className='movie' key={index}>
                <img src={movie.poster_path} alt={`Poster of the movie ${movie.title}`} onClick={() => userMovieSelection(movie)} />
                <p>{movie.title}</p>
                <p>⭐️ {movie.average_rating.toFixed(1)}</p>
              </div>
            })}
          </div>
        </section>
        }
        <Footer />
    </main>
  );
};

export default App;
