import './App.css';
import Navbar from '../Navbar/Navbar';
import movieData from '../../Data/Data';
import Footer from '../Footer/Footer';

function App() {

  const movieList = movieData.movies

  // async function fetchMovies() {
  //   let getMovies = await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies");
  //   let moviesGotten = await getMovies.json();
  //   console.log(moviesGotten, "<-- HERE");
  //   return await moviesGotten;
  // };

  // fetchMovies();


  //

  return (
    <main className="App">
      <Navbar />
      {/* <h2>Popcorn Score</h2> */}
        <section className="main-page-cont">
          {/* we'll have the random display here somewhere.... */}
          {/* we'll have the search functionality here somewhere.... */}
          <div className='movie-list'>
            {movieList.map((movie, index) => {
              return <div className='movie' key={index}>
                <img src={movie.poster_path} alt={`Poster of the movie ${movie.title}`} />
                <p>{movie.title}</p>
                <p>⭐️ {movie.average_rating.toFixed(1)}</p>
              </div>
            })}
          </div>
        </section>
        <Footer />
    </main>
  );
};

export default App;
