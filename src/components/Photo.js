import React from 'react';

import firstLeftPhoto from '../assets/imgs/FI3.JPG';
import secondLeftPhoto from  '../assets/imgs/FI11.jpg';
import thirdLeftPhoto from '../assets/imgs/FI12.jpg';
import fourthLeftPhoto  from '../assets/imgs/FI16.jpg';
import firstRightPhoto from '../assets/imgs/FI4.JPG';
import secondRightPhoto from '../assets/imgs/FI10.jpg';
import thirdRightPhoto from '../assets/imgs/FI11.jpg';
import fourthRightPhoto from '../assets/imgs/FI2.PNG';


const PhotoSection = () => {
  return (
    <div className="photo-section">
      <div className="photo-box">
        <img
          src={firstLeftPhoto}
          alt="First left"
          className="first-photo"
        />
        <img src={secondLeftPhoto} alt="Second left" />
        <img src={thirdLeftPhoto} alt="Third left" />
        <img src={fourthLeftPhoto} alt="Fourth left" />
      </div>
      <div className="photo-box">
        <img
          src={firstRightPhoto}
          alt="First right"
          className="first-photo"
        />
        <img src={secondRightPhoto} alt="Second right" />
        <img src={thirdRightPhoto} alt="Third right" />
        <img src={fourthRightPhoto} alt="Fourth right" />
      </div>
    </div>
  );
};

export default PhotoSection;