import React from "react";

import {ContainerN,Logo} from "../style.js";

import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import ImageLogo from "../assets/image-logo.png"
import Button from "../Components/Button.jsx";

function Nav(){
    return(
        <ContainerN>
         <Logo>
        <img src={ImageLogo} alt="image-logo"></img>
        </Logo> 

        <ul>
        <li><a href="#menu">Menu</a></li>
         <li><a href="#buquês">Bouquet</a></li>
         <li><a href="#arranjos"> Flowers</a></li>
         <li><a href="#plantas">Plants</a></li>
      </ul>

       
      <div className="input-icon">
        <input type="text" placeholder="search" />
        <FaSearch className="search-icon" />
      </div>
       
       <div className="icons">
       <BsFillTelephoneFill className="telephone-contact"/>
       <FaShoppingCart className="shopping-cart-icon"/>
       </div>
     
      <Button>
      Register
      </Button>
       
        </ContainerN>
    )
}

export default Nav;