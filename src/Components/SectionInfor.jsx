import React, {useEffect}from "react";

import {ContainerI} from "../style";

import ImageF1 from "../assets/card-image-f1.jpg";
import ImageF2 from "../assets/card-image-f2.jpg";
import ImageF3 from "../assets/card-image-f3.jpg"

import ScrollReveal from "scrollreveal";

function SectionInformation(){
    
    useEffect(() => {
        // Configurações do ScrollReveal
        ScrollReveal().reveal('.image1f', {
          delay: 200,
          duration: 1000,
          origin: 'bottom',
          distance: '50px',
          opacity: 0,
          scale: 0.9,
          interval: 200,
        });
      }, []);
    
    return(
        <ContainerI>

        <div className="image1f">
        <img src={ImageF1} alt="imagef1"></img>

        <h1>Flowers Bouquet Pink</h1>
        </div>   

       
        <div className="image1f">
        <img src={ ImageF2} alt="imagef1"></img>
        
        <h1>Flowers Bouquet Pink</h1>
        </div>     

         <div className="image1f">
        <img src={ImageF3 } alt="imagef1"></img>
        
        <h1>Flowers Bouquet Pink</h1>
        
         </div>    
        </ContainerI>
    )
}

export default SectionInformation;