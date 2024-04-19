import { useState } from "react";
import { FaFacebookSquare, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import Styles from "./loginpage.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

const LoginandSignup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneChange = (value,) => {
    setPhoneNumber(value);
    
  };

  return (
    <>
     {/* <div className={Styles.overlay}> */}
      <div className={Styles.main}>
        <div className={Styles.top}>
          <p className={Styles.toptxt}>Log in or sign up</p>
        </div>
         <div className={Styles.topline} ></div>
        <div className={Styles.maininput}>
          <p className={Styles.maintxt}>Welcome to Airbnb</p>
          <div className={Styles.input}>
          <label>Phone number</label>
            <PhoneInput
             inputStyle={{color:'black', width:'370px'}}
              type="name"
              className={Styles.inputelement}
              country={"us"}
              value={phoneNumber} 
              onChange={handlePhoneChange}
            />
          </div>

          <p className={Styles.p}>
            We’ll call or text you to confirm your number. Standard message and
            data rates apply <span className={Styles.span}>Privacy Policy</span>{" "}
          </p>

          <button className={Styles.btn}>Continue</button>
        </div>
        <div className={Styles.lineupper}>
          <div className={Styles.line}></div>
        <div ></div>
          <p>or</p>
          <div className={Styles.line} ></div>
        </div>
        <div className={Styles.socialmain}>
          <div className={Styles.social} >
            <FaFacebookSquare color="blue" className={Styles.logo} />
            <p>Continue with Facebook</p>
          </div>
          <div className={Styles.social} >
            <FcGoogle className={Styles.logo}  />
            <p>Continue with Google</p>
          </div>
          <div className={Styles.social} >
            <FaApple className={Styles.logo}   />
            <p>Continue with Apple</p>
          </div>
          <div className={Styles.social} >
            <MdOutlineEmail className={Styles.logo}   />
            <p>Continue with email</p>
          </div>
      </div>
      </div>
    </>
  );
};

export default LoginandSignup;
