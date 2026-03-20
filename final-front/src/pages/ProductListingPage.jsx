import React, { useState } from "react"; 
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";


const ProductListingPage = () => {
  const [filterOpen, setFilterOpen] = useState(false); 

  
  const products = [
    { name: "K-Swiss V8 - Masculino", image: "/produc-image-1.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "/produc-image-2.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "/produc-image-3.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "/produc-image-4.jpeg", price: 200, priceDiscount: 149.9 },
  ];

  return (
    <div className="product-listing-page">
      
      
      <div className="mobile-filter-header">
        <button className="btn-filter-mobile" onClick={() => setFilterOpen(true)}>
            <i className="pi pi-filter"></i> Filtrar
        </button>
      </div>

      
      <aside className={`sidebar-container ${filterOpen ? "open" : ""}`}>
        
        
        <div className="sidebar-mobile-header">
            <h3>Filtrar</h3>
            <button className="btn-close-filter" onClick={() => setFilterOpen(false)}>
                X
            </button>
        </div>

        
        <div className="sort-section">
          <label className="sort-label">Ordenar por</label>
          <select className="sort-select">
            <option value="lowest">Menor preço</option>
            <option value="highest">Maior preço</option>
          </select>
        </div>

        <div className="filter-container">
          <h3 className="filter-main-title">Filtrar por</h3>
          <hr className="filter-divider" />

          <FilterGroup 
            title="Marca"
            inputType="checkbox"
            options={[
              { text: "Adidas" },
              { text: "Nike" },
              { text: "Puma" },
              { text: "K-Swiss" }
            ]}
          />
        
           <FilterGroup 
            title="Categoria"
            inputType="checkbox"
            options={[
              { text: "Esporte e lazer" },
              { text: "Casual" },
              { text: "Utilitário" },
              { text: "Corrida" }
            ]}
          />
           <FilterGroup 
            title="Gênero"
            inputType="radio"
            options={[
              { text: "Masculino", value: "m" },
              { text: "Feminino", value: "f" },
              { text: "Unisex", value: "u" }
            ]}
          />
        </div>
      </aside>

   
      {filterOpen && (
        <div className="filter-overlay" onClick={() => setFilterOpen(false)}></div>
      )}

      
      <main className="main-content">
        <Section 
          title={`Resultados para "Tênis" - ${products.length} produtos`} 
          titleAlign="left"
        >
          <ProductListing products={products} />
        </Section>
      </main>

    </div>
  );
};

export default ProductListingPage;