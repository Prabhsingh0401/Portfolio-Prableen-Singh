import React from 'react'
import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import {Link} from 'react-router-dom' 
import './index.scss'
import {useState} from 'react'

const Home = () => {

    const [letterClass]=useState('text-animate-hover')

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={letterClass}>i</span>

                    <br></br>

                    <span className={letterClass}>I</span>
                    <span className={letterClass}>'</span>
                    <span className={letterClass}>m</span>
                    ‎ ‎ 
                <img src={LogoTitle} alt='Developer'></img>
                ‎ ‎ ‎
                    <span className={letterClass}>r</span>
                    <span className={letterClass}>a</span>
                    <span className={letterClass}>b</span>
                    <span className={letterClass}>l</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>n</span>
                <br></br>
                    <span className={letterClass}>W</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>b</span>
                    ‎ ‎
                    <span className={letterClass}>D</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>v</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>l</span>
                    <span className={letterClass}>o</span>
                    <span className={letterClass}>p</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>r</span>

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