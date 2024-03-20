import React, { useState } from 'react';

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
        <h2 className="find-branch-text">Find a Branch closest to you</h2>
        <button className="find-branch-button" onClick={handleBranchClick}>
          Branches
        </button>
  
        {showBranchDetails && (
          <div className="branch-details-overlay">
            <div className="branch-details-content">
              <button className="close-button" onClick={handleCloseDetails}>
                X
              </button>
              <h2>Branch Details</h2>
              <div className="branch-details">
                {/* Your content here */}
                <div className="branch-item">
                  <img src="branch1.jpg" alt="Branch 1" />
                  <h3>Branch 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="branch-item">
                  <img src="branch2.jpg" alt="Branch 2" />
                  <h3>Branch 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="branch-item">
                  <img src="branch3.jpg" alt="Branch 3" />
                  <h3>Branch 3</h3>
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