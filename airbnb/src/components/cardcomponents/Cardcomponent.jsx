import {} from 'react';
import { cardapi } from './Cardapi.jsx';
import Styles from '../css/card.module.css';
import Card from './Card.jsx';

const Cardcomponent = () => {
  const data = cardapi;

  return (
    <div className={Styles.topmain}>
      {data.map((curr) => (
        <div key={curr.id} className={Styles.cardmain}>
          <Card {...curr} />
        </div>
      ))}
    </div>
  );
};

export default Cardcomponent;
