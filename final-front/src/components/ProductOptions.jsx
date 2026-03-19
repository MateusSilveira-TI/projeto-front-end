import React, { useState } from "react";


const ProductOptions = ({ options, radius, shape, type }) => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="product-options">
      {options.map((option, index) => (
        <div
          key={index}
          className={`option-item ${shape} ${selectedOption === option ? "selected" : ""}`}
          style={{ 
             borderRadius: radius,
             
             backgroundColor: type === "color" ? option : "#FFF",
             border: type === "color" ? "none" : "1px solid #ccc"
          }}
          onClick={() => handleOptionClick(option)}
        >
          
          {type === "text" ? option : null}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;