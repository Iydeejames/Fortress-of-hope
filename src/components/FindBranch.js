import React, { useState } from 'react';
import FI10 from "../assets/imgs/FI10.jpg";
import FI14 from "../assets/imgs/FI14.jpg";
import FI15 from "../assets/imgs/FI15.jpg";

const FindBranch = () => {
    const [showBranchDetails, setShowBranchDetails] = useState(false);
  
    const handleBranchClick = () => {
      setShowBranchDetails(true);
    };
  
    const handleCloseDetails = () => {
      setShowBranchDetails(false);
    };
  
    return (
      <div className="find-branch-container">
        <h2 className="find-branch-text">Find a Branch nearest to you</h2>
        <button className="find-branch-button" onClick={handleBranchClick}>
          Branches
        </button>
  
        {showBranchDetails && (
          <div className="branch-details-overlay">
            <div className="branch-details-content">
              <button className="close-button" onClick={handleCloseDetails}>
                X
              </button>
              <h2 className='heading'>OUR BRANCHES</h2>
              <div className="branch-details">
                {/* content here */}
                <div className="branch-item">
                  <img src={FI10} alt="" />
                  <h3>FORTRESS HEADQUATERS</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="branch-item">
                  <img src={FI14} alt="" />
                  <h3>LIGHT HOUSE</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="branch-item">
                  <img src={FI15} alt="" />
                  <h3>POWER HOUSE</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default FindBranch;