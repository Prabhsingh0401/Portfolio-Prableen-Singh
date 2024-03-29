import './index.scss'
import {useRef } from 'react'

const Logo = () =>{
    const bgref = useRef();
    const outlineLogoRef = useRef();
    return(
    <div className='Logo-container' ref={bgref}>
        <svg className='sv1' ref={outlineLogoRef} xmlns="http://www.w3.org/2000/svg" width="1339" height="1236" viewBox="0 0 1339 1236">
        <text className='cls-2' transform="translate(659.506 1187.235) scale(20.417)"><tspan x="-40">Ps</tspan></text>
        </svg>

    </div>
    )
}

export default Logo