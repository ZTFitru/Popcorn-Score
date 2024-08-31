import './App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Routes, Route } from "react-router-dom";
import CardVideos from '../CardVideos/CardVideos';
import Title from '../Title/Title.js';
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
            console.log(Error)
            const data = await response.json();
            setApiMovies(data.movies);
            setError('')
        } catch (error) {
            setError('Sorry something went wrong, please try again!')
        }
    }
    getMovies();

},[])

  return (
    <main className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Title apiMovies={apiMovies} error={error}/>}/>
        <Route path='/movies/:id' element={<CardDetail  />}/>
        <Route path='/movies/:movie_id/videos' element={<CardVideos />}/>
        <Route path='*' element={<ErrorCard />} />
      </Routes>
      <Footer />
    </main>
  )

};

export default App;
