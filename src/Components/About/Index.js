import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {useState} from 'react'
import { faAngular } from '@fortawesome/free-brands-svg-icons'

const About = () => {

const [letterClass]=useState('text-animate-hover')

    return(
    <div className='container about-page'>
        <div className='text-zone'>
            <h1 className='About'>
                    <span className={letterClass}>A</span>
                    <span className={letterClass}>b</span>
                    <span className={letterClass}>o</span>
                    <span className={letterClass}>u</span>
                    <span className={letterClass}>t</span>
                    ‎ ‎ 
                    <span className={letterClass}>M</span>
                    <span className={letterClass}>e</span>
            </h1>
            <p>
            I'm a passionate and dedicated B.Tech CSE student enrolled at <b>Guru Tegh Bahadur 
            Institute of Technology</b>. With a profound interest in technology and a focus on Computer Science, 
            I am on a journey to explore and excel in the dynamic field of front-end development.
            </p>

            <p>
            Being a front-end developer is not just a career choice for me; it's a creative outlet where I 
            merge my technical skills with a keen eye for design. I take pride in my proficiency as a 
            graphics and UI designer.
            </p>

            <p>
            I am an avid learner, a team player, and a problem solver. 
            I believe in the power of collaboration and the synergy it creates to achieve remarkable results. 
            Whether it's coding, designing, or collaborating with a team, I approach each task with enthusiasm 
            to exceed expectations.
            </p>
        </div>
        
        <div className='stage-cube-cont'>
            <div className='cube-spinner'>
                <div className='face1'>

                    <FontAwesomeIcon icon={faAngular} color='#dd0031'></FontAwesomeIcon>

                </div>
            </div>
        </div>
    </div>

    )
}

export default About