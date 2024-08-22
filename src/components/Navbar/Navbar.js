import './Navbar.css';
import logo from '../../assets/popcornScoreLogo.png';

const Navbar = () => {

    return (
        <div className='navbar'>
            <img src={logo} alt='popcorn score' />
            <h1>POPCORN SCORE</h1>
        </div>
    )
};

export default Navbar;