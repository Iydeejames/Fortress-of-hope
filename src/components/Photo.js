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
  // Duplicate the images to create a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="photo-section-container">
      <div className='floating-bg'>
        <div className="photo-section">
          {duplicatedImages.map((image, index) => (
            <img key={index} src={image} alt={`image-${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSection;