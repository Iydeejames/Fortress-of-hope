import React, { useState } from 'react';

const SalvationSection = () => {
  const [showSalvationPage, setShowSalvationPage] = useState(false);

  const handleYesClick = () => {
    setShowSalvationPage(true);
  };

  const handleBackClick = () => {
    setShowSalvationPage(false);
  };

  return (
    <div className="salvation-section">
      {!showSalvationPage ? (
        <div>
          <h2>Ready to begin this new experience with Christ?</h2>
          <button onClick={handleYesClick} className="yes-button">YES</button>
        </div>
      ) : (
        <div className="salvation-page">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button onClick={handleBackClick} className="back-button">Back</button>
        </div>
      )}
    </div>
  );
};

export default SalvationSection;
