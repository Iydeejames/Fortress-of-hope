import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import FI10 from "../../assets/imgs/FI10.jpg";
import FI14 from "../../assets/imgs/FI14.jpg";
import FI15 from "../../assets/imgs/FI15.jpg";

const BranchDetails = ({ handleCloseDetails }) => {
  const handleBackButtonClick = () => {
    if (typeof handleCloseDetails === 'function') {
      handleCloseDetails(); // Call handleCloseDetails to navigate back to the main page
    } else {
      console.error("handleCloseDetails is not a function");
    }
  };

  return (
    <div className="branch-details-overlay">
      <div className="branch-details-content">
        <button className="close-button" onClick={handleBackButtonClick}>
          X
        </button>
        
        <h2 className='heading'>Worship with us at:</h2>
        <div className="branch-details">
          <div className="branch-item">
            <img src={FI10} alt="" />
            <h3>FORTRESS HEADQUATERS</h3>
            <p>
              Fortress Of Hope Gospel Church, Nwaniba road, opposite NDLEA, Uyo.<br></br>
              <b>Our time of services are:</b> <br></br>
              Sunday: 7am and 9am<br></br>
              Wednesday: 5pm <br></br>
            </p>
          </div>
          <div className="branch-item">
            <img src={FI14} alt="" />
            <h3>LIGHT HOUSE</h3>
            <p>
              Fortress Of Hope Gospel Church, Uyo.<br></br>
              <b>Our time of services are:</b> <br></br>
              Sunday: 7am and 9am<br></br>
              Wednesday: 5pm <br></br>
            </p>
          </div>
          <div className="branch-item">
            <img src={FI15} alt="" />
            <h3>POWER HOUSE</h3>
            <p>
              Fortress Of Hope Gospel Church, Uyo.<br></br>
              <b>Our time of services are:</b> <br></br>
              Sunday: 7am and 9am<br></br>
              Wednesday: 5pm <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define prop types to ensure handleCloseDetails is a function
BranchDetails.propTypes = {
  handleCloseDetails: PropTypes.func.isRequired
};

export default BranchDetails;
