import './App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import MovieDisplay from '../MovieDisplay/MovieDisplay';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies/:id' element={<MovieDetails />}/>
        <Route path='/movies/:movie_id/videos' element={<MovieDisplay />}/>
      </Routes>
      <Footer />
    </Router>
  )

}

export default App;
