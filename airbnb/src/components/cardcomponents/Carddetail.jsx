import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { cardapi } from "./Cardapi.jsx";
import { TbBrandAirbnb } from "react-icons/tb";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import Login from "../navbar/login.jsx";
import Styles from "../css/carddetails.module.css";
import { HiSearchCircle } from "react-icons/hi";

const Carddetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    // Find the card with the matching ID
    const selectedCard = cardapi.find((curr) => curr.id === id);
    setCard(selectedCard);
  }, [id]);

  return (
    <div>
      <div className={Styles.nav}>
        <div className={Styles.airbnb}>
          <TbBrandAirbnb className={Styles.logo} />
          <h1 className={Styles.logotxt}>airbnb</h1>
        </div>

        <div className={Styles.search}>
          <p>Start your Search</p>
          <HiSearchCircle className={Styles.searchlogo} />
        </div>
        <Login />
      </div>
      {card ? (
        <div>
          <div>
            <div className={Styles.heading}>
              <div className={Styles.startheading} >
            <h1>{card.name}</h1>
              <div className={Styles.logoheading} >
                <AiFillStar size={18} />
                <p>New</p>
                <div  className={Styles.textheading} >
                  <p>{card.location}</p>
                  <p>{card.type}</p>
                </div>
              </div>
              </div>
              <div className={Styles.rightheading}>
                <div className={Styles.sideheading}>
                  <FiShare size={18} />
                  <p>Share</p>
                </div>
                <div className={Styles.sideheading} >
                  <AiOutlineHeart size={18} />
                  <p>Save</p>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.cardimg} >
            <img src={card.homeMainPic} alt="Image not found" />
            <div className={Styles.imgitems} >
              <img src={card.carouselPic1} alt="Image not found" />
              <img src={card.carouselPic2} className={Styles.conerradius1} alt="Image not found" />
              <img src={card.carouselPic3} alt="Image not found" />
              <img src={card.carouselPic4}  className={Styles.conerradius2} alt="Image not found" />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Carddetails;
