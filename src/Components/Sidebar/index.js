import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faU, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src ={LogoS} alt='Logo'></img>
            <img className='sub-logo' src ={LogoSubtitle} alt='LogoPrabh'></img>
        </Link>
        <nav>
            <NavLink exact="true" activeclassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassName="active" className='about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassName="active" className='contact-link' to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='nonreferrer' href='https://www.linkedin.com/in/prableen-singh-matharu'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>

            <li>
                <a target='_blank' rel='nonreferrer' href='https://instagram.com/_.prabh__ramgharia._'>
                <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
            
            <li>
                <a target='_blank' rel='nonreferrer' href='https://github.com/Prabhsingh0401'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar