import './Navbar.css';
import logo from '../../assets/popcornScoreLogo.png';
import { Link } from 'react-router-dom';

const Navbar = ({goBack}) => {

    return (
        <div className='navbar'>
            <Link to={'/'}>
                <img src={logo} alt={`Website logo`} onClick={goBack}/>
            </Link>
            <h1>POPCORN SCORE</h1>
        </div>
    )
};

export default Navbar;