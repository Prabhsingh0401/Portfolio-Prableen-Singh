import './index.scss'
import Loader from 'react-loaders'
import { useState } from 'react'

const Contact = () => {

    const [letterClass] = useState('text-animate-hover')

    return(
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1 className='contact'>
                    <span className={letterClass}>C</span>
                    <span className={letterClass}>o</span>
                    <span className={letterClass}>n</span>
                    <span className={letterClass}>t</span>
                    <span className={letterClass}>a</span>
                    <span className={letterClass}>c</span>
                    <span className={letterClass}>t</span>
                    ‎ ‎ 
                    <span className={letterClass}>M</span>
                    <span className={letterClass}>e</span>
            </h1>
            <p>
                I am interested in freelance oppurtunities - especially ambitous and Creative projects.
                However, if you have any other request or question, don't hesitate to contact me using below form 
                either. 😊
            </p>
            <div className='contact-form'>
                <form>
                    <li className='half'>
                        <input type='text' name='name' placeholder='Name' required></input>
                    </li>

                    <li className='half'>
                        <input type='email' name='email' placeholder='Email' required></input>
                    </li>

                    <li>
                       <input type='text' placeholder='Subject' name='Subject' required></input> 
                    </li>
                    
                    <li>
                        <textarea placeholder='Message' name='message' required></textarea>
                    </li>

                    <li>
                        <input type='submit' className='flat-button' value='Send'></input>
                    </li>
                </form>
                 
            </div>

            </div>
        </div>
        <Loader type='pacman'>
        </Loader>
    </>
    )
}

export default Contact