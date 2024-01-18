import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom' 
import './index.scss'

const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, <br></br>I'm‎ ‎ ‎ 
                <img src={LogoTitle} alt='Developer'></img>
                ‎ 
                lobodan
                <br></br>
                Web Developer and Designer
                </h1>
                <h2>
                    Front-end Developer / Photographer and Editor
                </h2>
                <br></br>
                <Link className='flat-button' to="/contact">Contact Me</Link>
            </div>
        </div>
    )
}

export default Home