import React, { useState, useEffect } from "react";
import FI11 from "../assets/imgs/FI11.jpg";
//import FI3 from "../assets/imgs/FI3.JPG";
//import FI4 from "../assets/imgs/FI4.JPG";
//import FI5 from "../assets/imgs/FI5.JPG";

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [FI11];
    //const images = [FI3, FI4, FI5];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change slide every 5 seconds
  
      return () => clearInterval(interval);
    }, [currentIndex, images.length]);
  
    return (
      <div id="home" className="hero-section"> {/* id="home" here */}
        <div className="slideshow-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="hero-image"
              />
            </div>
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>FORTRESS OF HOPE GOSPEL CENTER</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;