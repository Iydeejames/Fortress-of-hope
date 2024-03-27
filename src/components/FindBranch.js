// FindBranch.js

import React from 'react';

function FindBranch({ navigateTo }) {
  const handleButtonClick = () => {
    navigateTo('BranchDetails');
  };

  return (
    <div>
      <h2>Find a Branch nearest to you</h2>
      <button onClick={handleButtonClick}>Locations</button>
    </div>
  );
}

export default FindBranch;
