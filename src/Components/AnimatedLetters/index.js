import './index.scss'
const AnimatedLetters = ({strArray}) => {
    return(
        <span>
            {
                strArray.map((char, i) =>(
                    <span key = { char + i} className='letterClass'>
                        {char}
                    </span>  
                ))
            }
        </span>
    )
}

export default AnimatedLetters