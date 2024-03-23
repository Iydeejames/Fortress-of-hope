import React, { useState, useEffect } from 'react';
import './EventSection.css';

import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo4 from './photo4.jpg';

const photos = [photo1, photo2, photo3, photo4];

const EventSection = ({ photos }) => {
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
