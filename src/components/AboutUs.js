import React from 'react';
import React, { useEffect, useState } from 'react';
import FI2 from "../assets/imgs/FI2.PNG";


const AboutSection = () => {
    const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0.1)");
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const opacity = Math.min(scrollPosition / 500, 1); // Adjust the divisor for the scroll sensitivity
        setBackgroundColor(`rgba(0, 0, 0, ${opacity})`);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className="about-section-container" style={{ backgroundColor }}>
        <div className="about-section-left">
          <div className="image-card">
            <img src={FI2} alt="About" />
          </div>
        </div>
        <div className="about-section-right">
          <div className="main-card">
            <p> <b>Rev. Prince Amba</b> <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla </p>
          </div>

        </div>
        </div>

    );
  };
  
  export default AboutSection;