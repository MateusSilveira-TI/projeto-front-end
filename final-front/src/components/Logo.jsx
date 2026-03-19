import React from "react";

import logoImg from "../assets/logo-header.svg"; 
const Logo = () => {
  return (
    <img 
      src={logoImg} 
      alt="Logo Digital Store" 
      style={{ width: "253px", height: "44px" }} 
    />
  );
};

export default Logo;