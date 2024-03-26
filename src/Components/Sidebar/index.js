import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
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
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/prableen-singh-matharu'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://instagram.com/_.prableen_singh._'>
                <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
            
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/Prabhsingh0401'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://www.behance.net/prabhrangharia'>
                <FontAwesomeIcon icon={faBehance} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>

        </ul>
    </div>
    )
}

export default Sidebar

/*<NavLink exact="true" activeclassName="active" className='gallery-link' to="/gallery">
                <FontAwesomeIcon icon={faCameraRetro} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>*/