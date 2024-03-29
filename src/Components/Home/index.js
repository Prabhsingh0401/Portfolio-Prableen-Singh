import React from 'react'
import Loader from 'react-loaders'
import {Link} from 'react-router-dom' 
import './index.scss'
import {useState} from 'react'
import Type from '../Type'

const Home = () => {

    const [letterClass] = useState('text-animate-hover')

    return(
        <div>
        <div className="container home-page">
            <div className="text-zone">
                <h1 className='Home'>
                    <span className={letterClass}>H</span>
                    <span className={letterClass}>i</span>

                    <br></br>

                    <span className={letterClass}>I</span>
                    <span className={letterClass}>'</span>
                    <span className={letterClass}>m</span>
                    &nbsp;
                    <span className={letterClass}>P</span>
                    <span className={letterClass}>r</span>
                    <span className={letterClass}>a</span>
                    <span className={letterClass}>b</span>
                    <span className={letterClass}>l</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>n</span>
                <br></br>
                </h1>
                <Type/>
            <br></br>
                <Link className='flat-button' to="/contact">Contact Me</Link>
             <br></br> <br></br> <br></br>
                <Link className='flat-button2' to="" trailingIcon="picture_as_pdf" label="Resume"> Download CV </Link>
                </div>
                
        </div>
        <Loader type='pacman'></Loader>
        </div>
    )
}
export default Home