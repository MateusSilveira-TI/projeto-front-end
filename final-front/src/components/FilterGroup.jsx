import React from "react";


const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="filter-group">
      <h3 className="filter-title">{title}</h3>
      <div className="filter-options">
        {options.map((option, index) => (
          <label key={index} className="filter-option-label">
            <input 
              type={inputType} 
              value={option.value} 
              name={title}
              className="filter-input"
            />
            <span className="text">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;