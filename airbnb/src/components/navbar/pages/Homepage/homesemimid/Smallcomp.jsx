import {} from 'react'
import Styles from "./homesemimid.module.css";
const Smallcomp = () => {
  return (
    <>
    <div className={Styles.smalltop} >
        <div className={Styles.smallmain} >
            <div>
                <img  className={Styles.img}src="https://a0.muscache.com/im/pictures/c19751e5-cd4f-41d0-898f-2580b60cae08.jpg?im_w=1200&im_q=highq" />
            </div>
            <div className={Styles.innermain}>
                <h1 className={Styles.smalltxt}>Still have questions?</h1>
                <p className={Styles.smalltxt1}>Get answers from an experienced Superhost near you.</p>
                <button className={Styles.smallbtn}>Match with a Superhost</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Smallcomp