import {} from 'react'
import Styles from './footer.module.css'
import { GiEarthAmerica} from 'react-icons/gi';
import { BiRupee} from 'react-icons/bi';
import { AiFillFacebook , AiFillTwitterSquare } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <div  className={Styles.topmain}>
       <div className={Styles.line}></div>
        <div className={Styles.main} >
            <div className={Styles.innermain} >
                <p className={Styles.headline}>support</p>
                <p>Help Centre</p>
                <p>AirCover</p>
                <p>Supporting people with disabilities</p>
                <p>Cancellation options</p>
                <p>Our COVID-19 Response</p>
                <p>Report a neighbourhood concern</p>
            </div>
            <div className={Styles.innermain} >
                <p className={Styles.headline}>Community</p>
                <p>Airbnb.org: disaster relief housing</p>
                <p>Combating discrimination</p>
            </div>
            <div className={Styles.innermain} >
               <p className={Styles.headline}>Hosting</p>
               <p>Airbnb your home</p>
               <p>AirCover for Hosts</p>
               <p>Explore hosting resources</p>
               <p>Visit our community forum</p>
               <p>How to host responsibly</p>
            </div>
            <div className={Styles.innermain} >
                <p className={Styles.headline}>Airbnb</p>
                <p>Newsroom</p>
                <p>Learn about new features</p>
                <p>Letter from our founders</p>
                <p>Careers</p>
                <p>Investors</p>
            </div>
        </div>
         <div className={Styles.social}>
        <div className={Styles.lastleft}>
                <p>© 2023 Airbnb, Inc.</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Sitemap</p>
                <p>Company details</p>
            </div>
            <div className={Styles.lastright}>
                <GiEarthAmerica className={Styles.logo}/>
                <p>English (IN)</p>
                <p className={Styles.rupeelogo}><BiRupee className={Styles.logo}/>INR</p>
                <AiFillFacebook className={Styles.logo}/>
                <AiFillTwitterSquare className={Styles.logo}/>
                <FaInstagramSquare className={Styles.logo}/>
            </div>
            </div>

       
    </div>

    </>
  )
}

export default Footer