import {} from 'react';
import { Outlet , Link } from 'react-router-dom';
import { RiStarSFill } from 'react-icons/ri';
import Styles from '../css/card.module.css';

const Card = ({ id, homeMainPic, name, price, type, stars, location }) => {
  return (
    <div className={Styles.main}>
      <div className={Styles.imgdiv}>
        <Link to={`/card/${id}`}>
          <img className={Styles.img} style={{ objectFit: 'cover' }} src={homeMainPic} alt="Image not found" />
        </Link>
        <Outlet/>
      </div>
      <div className={Styles.headline}>
        <h1 className={Styles.txt}>
          {name}, {location}
        </h1>
        <h1 className={Styles.txt}>
          <RiStarSFill />
          {stars}
        </h1>
      </div>
      <div>
        <h1 className={Styles.typetxt}>{type}</h1>
      </div>
      <div className={Styles.priceline}>
        <h1>
          ₹{price}
          <span className={Styles.pricetxt}> total before taxes</span>
        </h1>
      </div>
    </div>
  );
};

export default Card;
