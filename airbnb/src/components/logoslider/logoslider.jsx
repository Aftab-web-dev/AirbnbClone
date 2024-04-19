import {} from 'react'
import {logoapi} from './logosliderapi.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,} from 'swiper';
import 'swiper/css';
import { MdFilterList } from 'react-icons/md';
import 'swiper/css/navigation';
import Styles from '../css/slider.module.css'
import Slidercard from './Slidecard.jsx';

const Logoslider = () => {
 
  const data = logoapi

  return (
    <>
    <div className={Styles.totalmain}>
    <Swiper
      modules={[Navigation]}
      spaceBetween={1}
      slidesPerView={12}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{margin: "15px"}}
      >
       {data.map((curr) => (
        <SwiperSlide key={curr.id} style={{}} >
         <Slidercard key={curr.id} {...curr}/>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className={Styles.filterbtn} >
    <MdFilterList className={Styles.filtericon}/>
    <p className={Styles.filtertxt}>filters</p>
    </div>
    </div>
    </>
  )
}

export default Logoslider