import "./index.scss"
import Image1 from "../../assets/images/PXL_20240206_122231431.jpg"
import Image2 from "../../assets/images/PXL_20240203_092223168.jpg"
import Image3 from "../../assets/images/PXL_20240203_091834646.jpg"
import Image4 from "../../assets/images/PXL_20231215_015848913.jpg"
import Image5 from "../../assets/images/PXL_20231207_131617597.jpg"


const Gallery = () => {
    return(
        <div className="Gallery-section">
        <img className="Image1" src={Image1} alt="Image1"></img>
        <img className="Image2" src={Image2} alt="Image2"></img>
        <img className="Image3" src={Image3} alt="Image3"></img>
        <img className="Image4" src={Image4} alt="Image4"></img>
        <img className="Image5" src={Image5} alt="Image4"></img>
        <p className="Quote1">"Capturing moments that tell <br></br> a thousand words."</p>
        <p className="Quote2">"Through the lens,<br></br> we find beauty <br></br> in the ordinary."</p>
        <p className="Quote3">"Photography: where the <br></br> ordinary becomes <br></br> extraordinary."</p>
        <p className="Quote4">"In every photograph, <br></br> a story unfolds."</p>
        </div>
    )
}

export default Gallery