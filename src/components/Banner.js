import React, { useState, useEffect } from 'react';
import './BannerSection.css';

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
    <div className="banner-section">
      <div className="slideshow">
        {loremIpsumTexts.map((text, index) => (
          <div key={index} className={`slide ${index === currentTextIndex ? 'active' : ''}`}>
            <p>{text}</p>
            <button onClick={handleSeeMore}>See more</button>
          </div>
        ))}
      </div>
      <div className="dot-container">
        {loremIpsumTexts.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentTextIndex ? 'active' : ''}`}
            onClick={() => setCurrentTextIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSection;