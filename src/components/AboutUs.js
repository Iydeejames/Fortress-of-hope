import React from 'react';
import FI2 from "../assets/imgs/FI2.PNG";
import FI3 from "../assets/imgs/FI3.JPG";
import FI5 from "../assets/imgs/FI5.JPG";


const AboutSection = () => {
    return (
      <div className="about-section-container">
        <div className="about-section-left">
          <h2>About Us</h2>
          <img src={process.env.PUBLIC_URL + '/assets/imgs/FI2.JPG'} alt="About" />
        </div>
        <div className="about-section-right">
          <div className="main-card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...</p>
          </div>
          <div className="small-cards">
            <img src="/src/assets/imgs/FI3.JPG" alt="Card 1" />
          </div>
          <div className="small-cards">
            <img src="/src/assets/imgs/FI5.JPG" alt="Card 2" />
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutSection;