import React from "react";

import {ContainerM} from "../style"


import ImageLogo from "../assets/image-logo.png";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function MenuFooter(){
    return(
        <ContainerM>
        
              <div className="img-logo">
               <img src={ ImageLogo} alt="logo"></img>

              <div className="icons">
              <FaInstagram />
              <FaWhatsapp />
              <MdOutlineEmail />
              </div>
              </div>  
        
        <div className="footer">

         <ul className="coluna1">
         <h1>Contacts</h1>  
         <li>Emerald Green Street</li> 
         <li>(011) 3614-0220</li>
         <li>contato@organie.com</li>
         <li>www.organiestore.com</li>
        </ul> 
        </div>

        <div className="footer">

         <ul className="coluna1">
        
         <h1>Information</h1>  
         <li>Products</li> 
         <li>Sales</li>
         <li>Types</li>
         <li>Physical Store</li>
        </ul> 
        </div>

        <div className="footer">

         <ul className="coluna1">
           
               <h1>Data</h1>  
               <li>My account</li> 
               <li>Personal information</li>
               <li>Address</li>
               <li>My story</li>
              </ul> 
              </div>
             
        </ContainerM>
    )
}

export default MenuFooter;