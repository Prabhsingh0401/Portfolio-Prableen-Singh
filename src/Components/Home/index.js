import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom' 
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['r', 'a', 'b', 'l', 'e', 'e', 'n' ]
    const jobArray = ['W' , 'e' , 'b' , 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={letterClass}>i</span>

                    <br></br>

                    <span className={letterClass}>I</span>
                    <span className={letterClass}>'m</span>

                    ‎ ‎  

                <img src={LogoTitle} alt='Developer'></img>
                ‎ ‎  
                <AnimatedLetters letterClass={letterClass}
                strArray = {nameArray}
                idx = {15} >
                </AnimatedLetters>
                <br></br>
                <AnimatedLetters letterClass={letterClass}
                strArray = {jobArray}
                idx = {22}>
                </AnimatedLetters>
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