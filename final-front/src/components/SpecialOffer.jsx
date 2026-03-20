import React from "react";

const SpecialOffer = () => {
  return (
    <section className="special-offer-container">
      
      
      <div className="special-offer-image">
       
        <div className="ellipse-bg"></div>
        <img 
          src="/produc-image-1.jpeg" 
          alt="Oferta Especial" 
        />
      </div>

   
      <div className="special-offer-info">
        <h4 className="offer-highlight">Oferta especial</h4>
        <h2 className="offer-title">Air Jordan edição de colecionador 2024</h2>
        <p className="offer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <button className="offer-button">Ver Oferta</button>
      </div>

    </section>
  );
};

export default SpecialOffer;