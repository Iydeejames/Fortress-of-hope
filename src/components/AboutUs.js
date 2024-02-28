import React from 'react';
import FI2 from "../assets/imgs/FI2.PNG";
import FI3 from "../assets/imgs/FI3.JPG";
import FI5 from "../assets/imgs/FI5.JPG";



const AboutSection = () => {
    return (
      <div className="about-section-container">
        <div className="about-section-heading">
        <h2>Rev. Prince Amba</h2>
        </div>

          <div className="about-section-left">
          <img src={FI2} alt="About" />
        </div>
        <div className="about-section-right">
          <div className="main-card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
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