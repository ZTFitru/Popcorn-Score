import './Footer.css';
import logo from '../../assets/popcornScoreLogo.png'
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-info'>
                <ul>
                    <li>Help</li>
                    <li>About us</li>
                    <li>Career</li>
                    <li>Popcorn Score Pro</li>
                    <li>Privacy Policy</li>
                    <li>Advertising</li>
                </ul>
            </div>
            <div className='footer-icon'>
                <img src={logo} alt={`Website logo`} />
            </div>
        </div>
    )
}

export default Footer;