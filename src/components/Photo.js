import React from 'react';

import image1 from '../assets/imgs/FI3.JPG';
import image2 from  '../assets/imgs/FI11.jpg';
import image3 from '../assets/imgs/FI12.jpg';
import image4 from '../assets/imgs/FI16.jpg';
import image5 from '../assets/imgs/FI4.JPG';
import image6 from '../assets/imgs/FI10.jpg';
import image8 from '../assets/imgs/FI11.jpg';


const PhotoSection = () => {
  return (
    <div className="photo-section">
      <div className="photo-box">
        <img
          src={firstPhoto}
          alt="First photo"
          className="first-photo"
        />
        <img src={secondPhoto} alt="Second photo" />
        <img src={thirdPhoto} alt="Third photo" />
        <img src={fourthPhoto} alt="Fourth photo" />
      </div>
      <div className="photo-box">
        <img
          src={firstPhoto}
          alt="First photo"
          className="first-photo"
        />
        <img src={secondPhoto} alt="Second photo" />
        <img src={thirdPhoto} alt="Third photo" />
        <img src={fourthPhoto} alt="Fourth photo" />
      </div>
    </div>
  );
};

export default PhotoSection;