import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { GiHamburgerMenu} from 'react-icons/gi'
import { CgProfile} from 'react-icons/cg'
import { ImEarth} from 'react-icons/im'
import { BsSearch , BsHeart  } from 'react-icons/bs'
import Styles from '../css/login.module.css'
import { Link } from 'react-router-dom'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import LoginandSignup from './pages/Loginmodals/LoginandSignup';

const Login = () => {
  const [popup, setPopup] = useState(false)
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  return (
    <>
    <div className={Styles.main} onClick={() => setPopup(true)}>
    <Link to="/host" ><p className={Styles.home}> Airbnb your home</p></Link>
    <ImEarth className={Styles.earth}/>

        <div className={Styles.outerlogin}>
            <div className={Styles.innerlogin}>
                <GiHamburgerMenu />
                <CgProfile className={Styles.logo}/>
            </div>
        </div>
        </div>
        <div className={Styles.mobilemain} >
        <div className={Styles.innermain}>
        <BsSearch className={Styles.mobilelogo}/>
        <p className={Styles.mobiletxt}>Explore</p>
        </div>
        <div className={Styles.innermain}>
        <BsHeart className={Styles.mobilelogo} />
        <p  className={Styles.mobiletxt}>Wishlists</p>
        </div>
      
        <div className={Styles.innermain}  onClick={onOpenModal} >
        <CgProfile  className={Styles.mobilelogo}/>
        <p className={Styles.mobiletxt}>Log in</p>
        </div>
        </div>

        {popup && (
            <ClickAwayListener onClickAway={() => setPopup(false)}>
                    <div className={Styles.popup}>
                        <li className={Styles.link} style={{color:"black"}} onClick={onOpenModal}>Sign Up</li>
                        <li className={Styles.link} onClick={onOpenModal}>Login</li>
                        <div className={Styles.line} ></div>
                        <Link to="/host" ><li className={Styles.link}>Airbnb your home</li></Link>
                        <Link to="/host" ><li className={Styles.link}>help</li></Link>
                    </div>
            </ClickAwayListener>
        )}


        {/* login modal */}
        <Modal  open={open} onClose={onCloseModal}>
            <LoginandSignup/>
        </Modal>
    </>
  )
}

export default Login