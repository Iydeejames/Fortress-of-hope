// FindBranch.js
import React from 'react';

const FindBranch = ({ handleShowBranchDetails }) => {
  return (
    <div className="find-branch-container">
      <h2>Find a Branch nearest to you</h2>
      <button onClick={handleShowBranchDetails}>Locations</button>
    </div>
  );
}

export default FindBranch;
