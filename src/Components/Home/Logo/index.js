import './index.scss'
import LogoS from '../../../assets/images/Side Logo Solid.png'
import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
import LogoSOut from '../../../assets/images/Side Logo Outline.png'
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
        <img ref={solidLogoRef} className='solid-logo' src={LogoS}></img>
    </div>
    )
}

export default Logo