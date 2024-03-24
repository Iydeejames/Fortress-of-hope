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
    }, 5000); // Change interval to 5 seconds

    return () => clearInterval(interval);
  }, [photos]);

  return (
    <div className="event-section">
      <div className="card">
        <img
          src={photos[activeIndex]}
          alt={`Event ${activeIndex + 1}`}
          className="card-image"
        />
      </div>
    </div>
  );
};

export default EventSection;
