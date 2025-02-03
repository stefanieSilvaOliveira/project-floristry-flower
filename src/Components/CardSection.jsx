import React, {useEffect} from "react";

import {ContainerTop,CardLeft} from "../style.js"

import ImageCardPink from "../assets/image-Card1.png";
import ImageCardOrange from "../assets/image-Card2.png";

import Button from "./Button.jsx";
import ScrollReveal from "scrollreveal";


function Card(){
  useEffect(() => {
    // Configurações do ScrollReveal
    ScrollReveal().reveal('.card-content', {
      delay: 200,
      duration: 2000,
      origin: 'bottom',
      distance: '50px',
      opacity: 0,
      scale: 0.9,
      interval: 200,
    });
  }, []);
  
  
  return(
      <ContainerTop>
       
       <CardLeft>
       <div className="card-content">
       <img src={ImageCardPink} alt="card"></img>

      <button className="button-sale">SALE</button>
       
       <h1>Bouquet of red roses</h1>
       <h2>R$ 20,00</h2>
       
       <div className="button-container">
       <Button className="button-section">Choosse</Button>
       </div>
       </div>
       </CardLeft>

       <CardLeft>
       <div className="card-content">
       <img src={ImageCardOrange} alt="card"></img>
      
       <h1>Bouquet of red roses</h1>
       <h2>R$ 20,00</h2>
       
       <Button className="button-section">Choosse</Button>
       </div>
       </CardLeft>

       <CardLeft>
       <div className="card-content">
       <img src={ImageCardPink} alt="card"></img>
     
       <button className="button-sale">SALE</button>
       
       <h1>Bouquet of red roses</h1>
       <h2>R$ 20,00</h2>

       <Button className="button-section">Choosse</Button>
      
       </div>
       </CardLeft>
      </ContainerTop>
    )
}

export default Card;