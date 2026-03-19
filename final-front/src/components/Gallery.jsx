import React, { useState, useEffect, useCallback } from "react"; // 1. Importe useCallback



const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="#474747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#474747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const Gallery = ({
  className = "",
  width = "100%",
  height = "auto",
  radius = "0px",
  showThumbs = false,
  images = [],
  autoPlay = false,
  interval = 3000,
  onSlideChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const handleNext = useCallback(() => {
  
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]); 
  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const handleThumbClick = (index) => {
    setCurrentIndex(index);
  };


  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentIndex);
    }
  }, [currentIndex, onSlideChange]);

 
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, handleNext]); 

  if (!images || images.length === 0) return null;

  return (
    <div className={`gallery-container ${className}`} style={{ width: width }}>
      <div className="gallery-main" style={{ height: height, borderRadius: radius }}>
        
        <button className="arrow-btn arrow-left" onClick={handlePrev}>
          <ArrowLeft />
        </button>

        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex}`}
          className="main-image"
        />

        <button className="arrow-btn arrow-right" onClick={handleNext}>
          <ArrowRight />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((img, index) => (
            <div
              key={index}
              className={`thumb-item ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleThumbClick(index)}
              style={{ borderRadius: radius }}
            >
              <img src={img.src} alt={`Thumb ${index}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;