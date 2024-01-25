import './index.scss'
import LogoS from '../../../assets/images/Side Logo Solid.png'
import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
import { useEffect, useRef } from 'react'

const Logo = () =>{
    const bgref = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgref.current,{
            duration:1,
            opacity:1,
        })
        .from(outlineLogoRef.current,{
            drawSVG:0,
            duration:20,
        })
    },[])

    return(
    <div className='Logo-container' ref={bgref}>
        <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt='Logo'></img>
        <svg ref={outlineLogoRef} xmlns="http://www.w3.org/2000/svg" width="1339" height="1236" viewBox="0 0 1339 1236">
        <text className='cls-1' transform="translate(659.506 1187.235) scale(20.417)"><tspan x="-30">Ps</tspan></text>
        </svg>

    </div>
    )
}

export default Logo