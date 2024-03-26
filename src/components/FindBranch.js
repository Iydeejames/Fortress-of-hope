import React, { useState } from 'react';

import BranchDetails from './BranchDetails';

const FindBranch = () => {
  const [showBranchDetails, setShowBranchDetails] = useState(false);

  const handleShowBranchDetails = () => {
    setShowBranchDetails(true);
  };

  return (
    <div className="find-branch-container">
      <h2>Find a Branch nearest to you</h2>
      {!showBranchDetails && (
        <button onClick={handleShowBranchDetails}>Locations</button>
      )}
      {showBranchDetails && <BranchDetails handleCloseDetails={() => setShowBranchDetails(false)} />}
    </div>
  );
};

export default FindBranch;
