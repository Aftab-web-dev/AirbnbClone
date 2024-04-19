import {} from 'react'
import {TbBrandAirbnb} from 'react-icons/tb'
import Styles from '../css/nav.module.css'
import Searchbar from './searchbar'
import Login from './login'
import Logoslider from '../logoslider/logoslider'



const Navbar = () => {
  return (
    <>
    <div className={Styles.nav}>
    <div className={Styles.main}>
    <TbBrandAirbnb className={Styles.logo}/>
    <h1 className={Styles.logotxt}>airbnb</h1>
    </div>
    <Searchbar/>
    <Login/>
    </div>
    <div className={Styles.line}></div>
    </>
  )
}

export default Navbar