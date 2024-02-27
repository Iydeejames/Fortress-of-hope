import React from 'react';
import FI2 from "../assets/imgs/FI2.PNG";

const AboutSection = () => {
  // Function to handle click on the smaller cards
  const handleCardClick = (cardId) => {
    // Logic to open another page or perform any other action
    console.log(`Card ${cardId} clicked`);
  };

  return (
    <div className="about-section-container">
      <div className="about-section-left">
        <img src="FI2" alt="About" />
      </div>
      <div className="about-section-right">
        <div className="main-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...</p>
        </div>
        <div className="small-cards" onClick={() => handleCardClick(1)}>
          <img src="/path/to/your/image1.jpg" alt="Card 1" />
        </div>
        <div className="small-cards" onClick={() => handleCardClick(2)}>
          <img src="/path/to/your/image2.jpg" alt="Card 2" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;