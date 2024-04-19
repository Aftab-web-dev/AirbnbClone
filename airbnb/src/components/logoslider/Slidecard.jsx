import {} from 'react'
import Styles from '../css/slider.module.css'
const Slidercard = ({ name , img}) => {
  return (
    <>
        <div className={Styles.innermain}  >
            <img className={Styles.img} src={img}  alt="img not find" />
            <p className={Styles.txt} >{name}</p>
        </div>
    </>
  )
}

export default Slidercard;