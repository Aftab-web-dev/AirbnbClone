import {useState} from "react";
import Styles from './homtopsec.module.css'
import { FiSearch } from 'react-icons/fi';
import { Map, Marker } from "pigeon-maps"
const HometopSec = () => {

  const [pricedata, setpricedata] = useState("5,041")
  const [Night , setNight] = useState(null)

  const handlenight = (e) => {
    setNight(e.target.value)
    console.log(e.target.value)
    const total = 5041 * e.target.value
    setpricedata(`${total.toLocaleString('en-In')}`)
    /* 
    /The `toLocaleString()` method in JavaScript is used to format a number into a string representation, taking into account the specific locale and language settings. When you provide the `'en-In'` parameter, it indicates that you want the number to be formatted according to the conventions of the Indian English locale.
    In the `'en-In'` locale, numbers are typically formatted using the Indian numbering system, which uses commas as thousands separators and periods as decimal separators. This formatting style is different from the standard numbering system used in other English-speaking countries.
    For example, if you have the number `1000000`, calling `toLocaleString('en-In')` on it will return the string `"10,00,000"`. The commas are used to separate the thousands, making the number easier to read and understand in the Indian English context.
    By using the `toLocaleString()` method with the `'en-In'` parameter, you ensure that numbers are formatted in a way that aligns with the conventions of the Indian English locale, making the output more suitable for users in that region.
    */
    console.log(total)
  }
  

  const handleprice = () => {
      // setpricedata( pricedata * 2)

  }




  return (
    <>
      <div className={Styles.rootmain}>
        <div>
          <div className={Styles.main} >
            <p className={Styles.title} >Airbnb it.</p>
            <p className={Styles.title1}>You could earn.</p>
            <p className={Styles.price} onChange={handleprice}>₹{pricedata}</p>
            <p className={Styles.txt}><span className={Styles.span} >{Night} night </span>1 night at an estimated ₹5,041 a night</p>
    
              <input type="range" onChange={handlenight} min={1} max={30} defaultValue={1} />
              <div className={Styles.num}>{Night} night</div>
            
            <p className={Styles.txt}>Learn how we estimate your earnings</p>

            <div className={Styles.smallcomp} >
              <div className={Styles.smallcomptop}>
              <FiSearch className={Styles.smallcomplogo}/>
                <div className={Styles.smallcompinner}>
                  <p className={Styles.smallcomptxt}>Mumbai</p>
                  <p className={Styles.smallcomptxt1}>Entire place,4guests</p>
                </div>
              </div>
            </div>
            <div>
          </div>
            </div>
        </div>
        
        <Map  height={300} width={350}  defaultCenter={[19.0760, 72.8777]} defaultZoom={11}>
      <Marker  anchor={[19.0760, 72.8777]} />
    </Map>
      
      </div>
    </>
  );
};

export default HometopSec;
