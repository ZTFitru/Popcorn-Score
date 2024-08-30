import './App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardVideos from '../CardVideos/CardVideos';
import Title from '../Title/Title';
import CardDetail from '../CardDetails/CardDetails';
import ErrorCard from '../ErrorCard/ErrorCard';
import { useState, useEffect } from 'react';

const App = () => {

  const [apiMovies, setApiMovies] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const getMovies = async () => {
        try {
            const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
            if(!response.ok) {
              throw new Error('Bad Network')
            }
            const data = await response.json();
            setApiMovies(data.movies);
        } catch (error) {
            setError('Sorry but our server is down!')
        }
    }
    getMovies();

},[])

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/movies:id' element={ <RandomScroller /> } /> */}
        <Route path='/' element={<Title apiMovies={apiMovies} error={error}/>}/>
        <Route path='/movies/:id' element={<CardDetail apiMovies={apiMovies} error={error} />}/>
        <Route path='/movies/:movie_id/videos' element={<CardVideos apiMovies={apiMovies} error={error}/>}/>
        <Route path='*' element={<ErrorCard />} />
      </Routes>
      <Footer />
    </Router>
  )

}

export default App;
