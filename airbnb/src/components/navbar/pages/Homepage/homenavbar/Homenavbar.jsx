import { useState} from 'react'
import Styles from './Homenavbar.module.css'
import {TbBrandAirbnb} from 'react-icons/tb'
import { RiHomeGearLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import LoginandSignup from '../../Loginmodals/LoginandSignup'
const Homenavbar = () => {

  const [open, setOpen] = useState(false)
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
    <div className={Styles.navbar}>
    <div className={Styles.innernavbar}>
    
    <Link to='/' > <TbBrandAirbnb className={Styles.logo1} /></Link>
    <div className={Styles.btntopmain}>
        <p className={Styles.txt}>Ready to Airbnb it?</p>
        <button className={Styles.btn}  onClick={onOpenModal} >
        <div className={Styles.btninner} >
        <div className={Styles.icon} >
        <RiHomeGearLine/>
        </div>
        <span className={Styles.txtbtn} >Airbnb Setup</span>

        </div>
        </button>
       

    </div>
    </div>
    </div>
       {/* login modal */}
       <Modal  open={open} onClose={onCloseModal}>
            <LoginandSignup/>
        </Modal>


    </>
  )
}

export default Homenavbar