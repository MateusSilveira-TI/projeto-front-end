import React from "react";
import { Link } from "react-router-dom";


const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
   
    <Link to="/product/1" className="product-card"> 
      
      <div className="card-image">
        {priceDiscount && <span className="discount-badge">ofertão</span>}
        <img src={image} alt={name} />
      </div>
      
      <div className="card-info">
        <span className="card-category">Tênis</span>
        <h3 className="card-name">{name}</h3>
        
        <div className="card-prices">
          {priceDiscount ? (
            <>
              <span className="price-old">R$ {price.toFixed(2)}</span>
              <span className="price-current">R$ {priceDiscount.toFixed(2)}</span>
            </>
          ) : (
            <span className="price-current">R$ {price.toFixed(2)}</span>
          )}
        </div>
      </div>

    </Link> 
  );
};

export default ProductCard;