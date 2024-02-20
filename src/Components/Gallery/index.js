import "./index.scss"
import Image1 from "../../assets/images/PXL_20240206_122231431.jpg"
import Image2 from "../../assets/images/PXL_20240203_092223168.jpg"
import Image3 from "../../assets/images/PXL_20240203_091834646.jpg"

const Gallery = () => {
    return(
        <>
        <img className="Image1" src={Image1} alt="Image1"></img>
        <img className="Image2" src={Image2} alt="Image2"></img>
        <img className="Image3" src={Image3} alt="Image3"></img>
        </>
    )
}

export default Gallery