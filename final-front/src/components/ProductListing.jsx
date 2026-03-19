import React from "react";
import ProductCard from "./ProductCard"; 


const ProductListing = ({ products }) => {
  return (
    <div className="product-listing-container">
      
      {products && products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};

export default ProductListing;