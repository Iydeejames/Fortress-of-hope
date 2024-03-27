import React, { useState } from 'react';
import BranchDetails from './BranchDetails'; 
import FI10 from "../assets/imgs/FI10.jpg";
import FI14 from "../assets/imgs/FI14.jpg";
import FI15 from "../assets/imgs/FI15.jpg";

const FindBranch = () => {
  const [showBranchDetails, setShowBranchDetails] = useState(false);

  const handleShowBranchDetails = () => {
    setShowBranchDetails(true);
  };

  const handleCloseDetails = () => {
    setShowBranchDetails(false);
  };

  return (
    <div>
      {showBranchDetails ? (
        <BranchDetails handleCloseDetails={handleCloseDetails} />
      ) : (
        <div className='find-branch-container '>
          <div>
          <h2>Find a Branch nearest to you</h2>
          <button onClick={handleShowBranchDetails}>Locations</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default FindBranch;
