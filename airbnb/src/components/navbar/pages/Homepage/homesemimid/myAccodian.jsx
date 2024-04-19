import {useState} from 'react'
import Styles from "./homesemimid.module.css";
import { RiArrowUpSLine } from 'react-icons/ri'
import { HiChevronDown } from 'react-icons/hi'
const MyAccodian = ({question , answer}) => {
    const [open, setopen] = useState(false)
    
  return (
    <>
    <div className={Styles.topaccmain}>
        <div className={Styles.accmain}>
            <h1 className={Styles.quetxt}>{question}</h1>
            <p onClick={() => setopen(!open)} >
                {open ? <RiArrowUpSLine className={Styles.icon}/> : <HiChevronDown className={Styles.icon}/>}
            </p>
           
        </div>
        {open && <h1 className={Styles.opentxt}>{answer}</h1> }
        <div className={Styles.accline}></div>
    </div>

    </>
  )
}

export default MyAccodian