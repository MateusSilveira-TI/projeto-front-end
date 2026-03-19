import React from "react";
 

const BuyBox = ({ 
  name, 
  reference, 
  stars, 
  rating, 
  price, 
  priceDiscount, 
  description, 
  children 
}) => {
  return (
    <div className="buy-box">
      <h1 className="buy-box-name">{name}</h1>
      <span className="buy-box-ref">Ref: {reference}</span>
      
      <div className="buy-box-reviews">
        <div className="stars-container">
            {stars} <img src="/star-icon.svg" alt="star" style={{width: '12px'}}/> 
        </div>
        <span className="rating-total">({rating} avaliações)</span>
      </div>

      <div className="buy-box-price">
        {priceDiscount ? (
            <>
                <span className="price-currency">R$</span>
                <span className="price-value-discount">{priceDiscount.toFixed(2)}</span>
                <span className="price-original">R$ {price.toFixed(2)}</span>
            </>
        ) : (
            <>
                <span className="price-currency">R$</span>
                <span className="price-value">{price.toFixed(2)}</span>
            </>
        )}
      </div>

      <div className="buy-box-description">
        <h3>Descrição do produto</h3>
        <p>{description}</p>
      </div>

      
      <div className="buy-box-children">
        {children}
      </div>

      <button className="btn-buy-box">COMPRAR</button>
    </div>
  );
};

export default BuyBox;