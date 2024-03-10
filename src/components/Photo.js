import React from 'react';
import image1 from '../assets/imgs/FI3.JPG';
import image2 from '../assets/imgs/FI12.jpg';
import image3 from '../assets/imgs/FI16.jpg';
import image4 from '../assets/imgs/FI11.jpg';
import image5 from '../assets/imgs/FI4.JPG';
import image6 from '../assets/imgs/FI10.jpg';
import image8 from '../assets/imgs/FI11.jpg';

const images = [image1, image2, image3, image4, image5, image6, image8];

const PhotoSection = () => {
  const imageWidthPercentage = 100 / images.length;

  return (
    <div className="photo-section-container">
      <div className='floating-bg'>
        <div className="photo-section">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`image-${index + 1}`} style={{ width: `${imageWidthPercentage}%` }} />
          ))}
        </div>
      </div>
      <style>
        {`
          .photo-section {
            display: flex;
            animation: slideAnimation ${images.length * 2}s linear infinite;
          }

          @keyframes slideAnimation {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-${100}%);
            }
          }

          .photo-section img {
            margin-top: 4rem;
            margin-bottom: 4rem;
            max-width: 100%;
            height: 20vh;
            margin-right: -1px;
          }
        `}
      </style>
    </div>
  );
};

export default PhotoSection;