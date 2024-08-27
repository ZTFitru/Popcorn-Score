import './App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDisplay from '../MovieDisplay/MovieDisplay';
import Title from '../Title/Title';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Title />}/>
        <Route path='/movies/:id' element={<MovieDetails />}/>
        <Route path='/movies/:movie_id/videos' element={<MovieDisplay />}/>
      </Routes>
      <Footer />
    </Router>
  )

}

export default App;
