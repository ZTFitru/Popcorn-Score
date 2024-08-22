import './Navbar.css'
import logo from '../../assets/popcornScoreLogo.png'

const Navbar = () => {

    return (
        <div className='navbar'>
            <img src={logo} alt='popcorn score' />
        </div>
    )
}

export default Navbar;