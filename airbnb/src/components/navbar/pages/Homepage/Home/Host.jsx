import {} from 'react'
import Homenavbar from '../homenavbar/Homenavbar'
import HometopSec from '../hometop/HometopSec'
import Homemid from '../homemid/homemid'
import Homesemimid from '../homesemimid/homesemimid'
import Footer from '../footer/footer'
const Host = () => {
  return (
    <>
        <div>
            <div>
            <Homenavbar/>
            <HometopSec/>
            <Homemid/>
            <Homesemimid/>
            <Footer/>
            </div>
        </div>
    </>
  )
}

export default Host