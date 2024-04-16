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
            <b>SAY THIS PRAYER:</b> LORD JESUS, come into my life, be my personal LORD and Saviour,
              forgive my sins and write my name in the book of life. Thank you for saving me.  Amen.
          </p>
          <button onClick={handleBackClick} className="back-button">Back</button>
        </div>
      )}
    </div>
  );
};

export default SalvationSection;
