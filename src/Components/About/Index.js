import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {useState} from 'react'
import {faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

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
            Being a front-end developer is not just a career choice for me, it's a creative outlet where I 
            merge my technical skills with a keen eye for design.
            </p>

            <p>
            I am an avid learner, a team player, and a problem solver. 
            I believe in the power of collaboration and the synergy it creates to achieve remarkable results. 
            Whether it's coding, designing, or collaborating with a team.
            </p>
        </div>
        <svg className='sv' xmlns="http://www.w3.org/2000/svg" width="1339" height="1236" viewBox="0 0 1339 1236">
        <text className='cls-1' transform="translate(659.506 1187.235) scale(20.417)"><tspan x="-40">Ps</tspan></text>
    </svg>
        
        <div className='stage-cube-cont'>
            <div className='cube-spinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faGithub} color='dark grey'></FontAwesomeIcon>
                </div>
                
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529'></FontAwesomeIcon>
                </div>

                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'></FontAwesomeIcon>
                </div>

                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'></FontAwesomeIcon>
                </div>

                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'></FontAwesomeIcon>
                </div>

                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'></FontAwesomeIcon>
                </div>
            </div>
        </div>
    </div>

    )
}

export default About