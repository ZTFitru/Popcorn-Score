import './Navbar.css';
import logo from '../../assets/popcornScoreLogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='navbar'>
            <Link to={'/'}>
                <img src={logo} alt={`Website logo`}/>
            </Link>
            <h1>POPCORN SCORE</h1>
        </div>
    )
};

export default Navbar;