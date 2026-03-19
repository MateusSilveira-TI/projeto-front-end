import React from "react";
 

const Section = ({ title, titleAlign = "left", children }) => {
  return (
    <section className="section-container">
      
      <div className={`section-header align-${titleAlign}`}>
        <h3>{title}</h3>
      </div>
      
      
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;