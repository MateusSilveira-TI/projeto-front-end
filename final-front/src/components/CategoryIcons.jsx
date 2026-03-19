import React from "react";

const CategoryIcons = () => {
  const categories = [
    {
      name: "Camisetas",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8L4 12V20L12 16V40H36V16L44 20V12L36 8H12Z" stroke="#8F8F8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: "Calças",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4H32L36 44H26L24 16L22 44H12L16 4Z" stroke="#8F8F8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: "Bermudas",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 6H34L38 30H26L24 14L22 30H10L14 6Z" stroke="#8F8F8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: "Headphones",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="">
          <path d="M10 26V38C10 40.2091 11.7909 42 14 42H16V26H10ZM10 26C10 18.268 16.268 12 24 12C31.732 12 38 18.268 38 26M38 26V38C38 40.2091 36.2091 42 34 42H32V26H38Z" stroke="#8F8F8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: "Tênis",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 32V38H38C40.2091 38 42 36.2091 42 34V28C42 22 36 20 36 20L26 12L10 24V32Z" stroke="#8F8F8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="categories-container">
      <h3>Coleções em destaque</h3> 
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="icon-circle">
              {category.icon}
            </div>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryIcons;