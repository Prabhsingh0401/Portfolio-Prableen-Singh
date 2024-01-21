import './index.scss'
import LogoS from '../../../assets/images/Logo.png'

const Logo = () =>{
    return(
    <div className='Logo-container'>
        <img className='solid-logo' src={LogoS}></img>
    </div>
    )
}

export default Logo