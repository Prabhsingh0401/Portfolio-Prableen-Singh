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
            </div>
        </div>
        <Loader type='pacman'>
        </Loader>
    </>
    )
}

export default Contact