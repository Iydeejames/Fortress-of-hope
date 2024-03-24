import React, { useState, useEffect } from 'react';

import photo1 from '../assets/imgs/FI17.JPG';
import photo2 from '../assets/imgs/FI18.JPG';
import photo3 from '../assets/imgs/FI19.JPG';
import photo4 from '../assets/imgs/FI20.JPG';

const photos = [photo1, photo2, photo3, photo4];

const EventSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [photos]);

  return (
    <div className="event-section">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Event ${index + 1}`}
          className={index === activeIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default EventSection;
