import './Navbar.css';
import logo from '../../assets/popcornScoreLogo.png';

const Navbar = ({goBack}) => {

    return (
        <div className='navbar'>
            {/* We will use this logo for the user to go back to home page.
                onClick will be needed
                use route for the home page with (/)
            */}
            <img src={logo} alt={`Website logo`} onClick={goBack}/>
            <h1>POPCORN SCORE</h1>
        </div>
    )
};

export default Navbar;