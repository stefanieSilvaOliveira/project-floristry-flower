import React,{useEffect} from "react";

import {ContainerS} from "../style";

import { GiShutRose } from "react-icons/gi";
import ImageBackground1 from "../assets/image-background2.png";

import ScrollReveal from "scrollreveal";


function SectionMain(){
    
    useEffect(() => {
        // Configurações do ScrollReveal
        ScrollReveal().reveal('.image1', {
          delay: 200,
          duration: 1000,
          origin: 'right',
          distance: '50px',
          opacity: 0,
          scale: 0.9,
          interval: 200,
        });
      }, []);
    
    return(
        <ContainerS>
       
        <div className="text-align">
        
        <p>
        
        <div className="icon-flower">
        <GiShutRose />
        </div>
            When a beatiful design is combined with powerful techology,
            it truly is and artwook,i love haw my website operates and looks
            with this theme.
                      Thank you for the awesome product.            
        </p>

        <div className="image1">
        <img src={ImageBackground1} alt="image1"></img>
        </div>
        
        </div>
        </ContainerS>
    )
}

export default SectionMain;
