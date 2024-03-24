import React, { useState } from 'react';
import FI10 from "../assets/imgs/FI10.jpg";
import FI14 from "../assets/imgs/FI14.jpg";
import FI15 from "../assets/imgs/FI15.jpg";

const FindBranch = () => {
    const [showBranchDetails, setShowBranchDetails] = useState(false);

    const handleBranchClick = () => {
        setShowBranchDetails(true);
        document.querySelector('.main-content').style.opacity = '0'; // Setting opacity of main content to 0
    };

    const handleCloseDetails = () => {
        setShowBranchDetails(false);
        document.querySelector('.main-content').style.opacity = '1'; // Restoring opacity of main content to 1
    };

    return (
        <div className="find-branch-container">
            <h2 className="find-branch-text">Find a Branch nearest to you</h2>
            <button className="find-branch-button" onClick={handleBranchClick}>
                Locations
            </button>

            {showBranchDetails && (
                <div className="branch-details-overlay">
                    <div className="branch-details-content">
                        <button className="close-button" onClick={handleCloseDetails}>
                            X
                        </button>
                        <h2 className='heading'>Worship with us at:</h2>
                        <div className="branch-details">
                            {/* content here */}
                            <div className="branch-item">
                                <img src={FI10} alt="" />
                                <h3>FORTRESS HEADQUATERS</h3>
                                <p>
                                    Fortress Of Hope Gospel Church, Nwaniba road, opposite NDLEA, Uyo.<br></br>
                                    <b>Our time of services are:</b> <br></br>
                                    Sunday: 7am and 9am<br></br>
                                    wednesday: 5pm <br></br>
                                </p>
                            </div>
                            <div className="branch-item">
                                <img src={FI14} alt="" />
                                <h3>LIGHT HOUSE</h3>
                                <p>
                                    Fortress Of Hope Gospel Church, Uyo.<br></br>
                                    <b>Our time of services are:</b> <br></br>
                                    Sunday: 7am and 9am<br></br>
                                    wednesday: 5pm <br></br>
                                </p>
                            </div>
                            <div className="branch-item">
                                <img src={FI15} alt="" />
                                <h3>POWER HOUSE</h3>
                                <p>
                                    Fortress Of Hope Gospel Church, Uyo.<br></br>
                                    <b>Our time of services are:</b> <br></br>
                                    Sunday: 7am and 9am<br></br>
                                    wednesday: 5pm <br></br>
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
