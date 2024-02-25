import React, { useState, useEffect } from 'react';

const loremIpsumTexts = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
];


const BannerSection = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % loremIpsumTexts.length);
      }, 5000); // Change text every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    const handleSeeMore = () => {
      // Implement logic to show full text
      console.log('See more clicked');
    };
  
    return (
      <div className="custom-banner-section">
        <div className="custom-slideshow">
          {loremIpsumTexts.map((text, index) => (
            <div key={index} className={`custom-slide ${index === currentTextIndex ? 'custom-active' : ''}`}>
              <div className="custom-card">
                <p>{text}</p>
                <button onClick={handleSeeMore}>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="custom-dot-container">
          {loremIpsumTexts.map((_, index) => (
            <div
              key={index}
              className={`custom-dot ${index === currentTextIndex ? 'custom-active' : ''}`}
              onClick={() => setCurrentTextIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default BannerSection;