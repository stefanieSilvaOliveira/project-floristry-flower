import React from "react";

import {StyledButton} from "../style.js";


const Button = ({ color, children,activeColor,textColor, display,justifyContent,alignItems,  ...props }) => {
    return <StyledButton color={color} activeColor={activeColor} {...props}>{children}</StyledButton>;
  };
  
  export default Button;