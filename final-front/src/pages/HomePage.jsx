import React, { useState } from "react";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import SpecialOffer from "../components/SpecialOffer";
import CategoryIcons from "../components/CategoryIcons";

const HomePage = () => {
  
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  
  const homeSlides = [
    {
      src: "/produc-image-1.jpeg",
      title: "Queima de Estoque Nike",
      description: "Conforto e estilo para suas corridas diárias com a melhor tecnologia de amortecimento.",
      buttonText: "Ver Ofertas Nike",
      link: "/products?brand=nike"
    },
    {
      src: "/produc-image-2.jpeg",
      title: "Coleção Adidas 2024",
      description: "A nova linha street wear da Adidas chegou com designs exclusivos e limitados.",
      buttonText: "Ver Coleção",
      link: "/products?brand=adidas"
    },
    {
      src: "/produc-image-3.jpeg",
      title: "Headphones Pro",
      description: "Música em alta definição sem ruídos externos. A imersão que você procurava.",
      buttonText: "Comprar Agora",
      link: "/products?cat=audio"
    },
  ];

  const productList = [
    { name: "K-Swiss V8 - Masculino", image: "/home-slide-1.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "/home-slide-2.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "/home-slide-3.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "/home-slide-4.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "/home-slide-5.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "/home-slide-6.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "/home-slide-7.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "/home-slide-8.jpeg", price: 200, priceDiscount: 149.9 },
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        
       
        <div className="hero-carousel">
          <Gallery
            width="100%"
            height="500px"
            radius="4px"
            showThumbs={false}
            images={homeSlides} 
            autoPlay={true}    
            interval={4000}     
            onSlideChange={(index) => setCurrentSlideIndex(index)} 
          />
        </div>

       
        <div className="hero-details">
         
          <h2 className="hero-title">
            {homeSlides[currentSlideIndex].title}
          </h2>
          
          <p className="hero-description">
            {homeSlides[currentSlideIndex].description}
          </p>
          
          <a href={homeSlides[currentSlideIndex].link}>
            <button className="hero-button">
              {homeSlides[currentSlideIndex].buttonText}
            </button>
          </a>
        </div>

      </section>

      
      <Section 
        title="Coleções em destaque" 
        titleAlign="left" 
      >
        <div className="collections-grid">
          
         
          <div className="collection-item">
            <img src="/collection-1.png" alt="Coleção 1" />
            <button className="collection-btn">Comprar</button>
          </div>

         
          <div className="collection-item">
            <img src="/collection-2.png" alt="Coleção 2" />
            <button className="collection-btn">Comprar</button>
          </div>

         
          <div className="collection-item">
            <img src="/collection-3.png" alt="Coleção 3" />
            <button className="collection-btn">Comprar</button>
          </div>

        </div>
      </Section>
      <section
      title="Coleção em Destaque"
      >
        <div>
          <ul>
            <li><a href="/polo-shirt_957057.png"></a></li>

          </ul>
        </div>

      </section>
      <CategoryIcons />


      <Section 
        title="Produtos em alta" 
        titleAlign="left" 
      >
        <ProductListing products={productList} />
      </Section>

      
      <SpecialOffer />

    </div>
  );
};

export default HomePage;