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
          alt="First photo"
          className="first-photo"
        />
        <img src={secondLeftPhoto} alt="Second photo" />
        <img src={thirdLeftPhoto} alt="Third photo" />
        <img src={fourthLeftPhoto} alt="Fourth photo" />
      </div>
      <div className="photo-box">
        <img
          src={firstRightPhoto}
          alt="First photo"
          className="first-photo"
        />
        <img src={secondRightPhoto} alt="Second photo" />
        <img src={thirdRightPhoto} alt="Third photo" />
        <img src={fourthRightPhoto} alt="Fourth photo" />
      </div>
    </div>
  );
};

export default PhotoSection;