import React from "react";
import 'swiper/css';

import {CarroselConteiner} from "../style.js";
import Button from "../Components/Button.jsx";

import imageMargaridas from '../assets/margaridas-brancas.png';




import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

 function Slider(){

  
  return (
    
    <CarroselConteiner>  
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        }
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide>
    <div className="slideContent">
    <img  className="imageSlider"  src={imageMargaridas} alt="margarida" />
    <div style={{ flex: 1, paddingLeft: '100px' }}>
    <h1>Pink Makes Your Day More Colorful</h1>
    <p>Exclusive Offer -10% Off This Week</p>
    <div style={{ display: 'flex', justifyContent: 'center',flexDirection:'column',alignItems: 'center', marginTop: '-10px'  }}>
    <Button className="button-slider">See More</Button>
    </div>
    </div>
    
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="slideContent">
    <img  className="imageSlider"   src={imageMargaridas}  alt="margarida" />
    
    <div style={{ flex: 1, paddingLeft: '100px' }}>
    <h1>Pink Makes Your Day More Colorful</h1>
    <p>Exclusive Offer -10% Off This Week</p>
    <div style={{ display:'Flex',justifyContent: 'center', flexDirection:'column',alignItems: 'center', marginTop: '-10px'}}>
    <Button className="button-slider">See More</Button>
    </div>
    </div>
    
    </div>
    </SwiperSlide>
    
    
    <SwiperSlide>
    <div className="slideContent">
    <img  className="imageSlider" src={imageMargaridas} alt="margarida" />
    
    <div style={{ flex: 1, paddingLeft: '100px' }}>
    <h1>Pink Makes Your Day More Colorful</h1>
    <p>Exclusive Offer -10% Off This Week</p>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-10px'}}>
    <Button className="button-slider">See More</Button>
    </div>
    </div>
    
    
    </div>
    </SwiperSlide>
  
    </Swiper>

    </CarroselConteiner>
  );
};

export default Slider;


