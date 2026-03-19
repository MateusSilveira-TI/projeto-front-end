import React from "react";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import ProductOptions from "../components/ProductOptions";
import BuyBox from "../components/BuyBox"; 


const ProductViewPage = () => {
  
 const productImages = [
    { src: "../public/produc-image-1.jpeg" },
    { src: "../public/produc-image-2.jpeg" },
    { src: "../public/produc-image-3.jpeg" },
    { src: "../public/produc-image-4.jpeg" },
    { src: "../public/produc-image-5.jpeg" },
  ];


  const relatedProducts = [
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-1.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-2.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-3.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-4.jpeg", price: 200, priceDiscount: 149.9 },
  ];

  return (
    <div className="product-view-container">
      
      <div className="product-details-wrapper">
        
       
        <div className="product-gallery-wrapper">
          <Gallery
            width="100%"
            height="570px"
            radius="4px"
            showThumbs={true}
            images={productImages}
          />
        </div>

       
        <div className="product-info-wrapper">
          <BuyBox
            name="Tênis Nike Revolution 6 Next Nature Masculino"
            reference="38416711"
            stars={4.7}
            rating={90}
            price={219.00}
            priceDiscount={219.00} 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          >
           
            <div style={{ marginTop: "20px" }}>
                <h4 style={{color: "var(--light-gray)", marginBottom: "10px"}}>Tamanho</h4>
                <ProductOptions 
                    options={["39", "40", "41", "42", "43"]}
                    radius="4px"
                    shape="square"
                    type="text"
                />
            </div>

            <div style={{ marginTop: "20px" }}>
                <h4 style={{color: "var(--light-gray)", marginBottom: "10px"}}>Cor</h4>
                <ProductOptions 
                    options={["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"]}
                    radius="50%"
                    shape="circle"
                    type="color"
                />
            </div>

          </BuyBox>
        </div>
      </div>

     
      <div className="related-products">
        <Section 
            title="Produtos Relacionados" 
            titleAlign="left" 
            link={{ text: "Ver todos", href: "/products" }}
        >
            <ProductListing products={relatedProducts} />
        </Section>
      </div>

    </div>
  );
};

export default ProductViewPage;