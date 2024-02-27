import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import video1 from '../assets/imgs/FI8.MOV';
import video2 from '../assets/imgs/FI9.MOV';

const VideoSection = () => {
  const [isPlaying, setPlaying] = useState(Array(6).fill(false));
  const videoRefs = Array(6).fill(null).map(() => useRef(null));

  const videoUrls = [video1, video1, video1, video2, video2, video2];

  const handleTogglePlay = (index) => {
    const updatedPlaying = [...isPlaying];
    updatedPlaying[index] = !updatedPlaying[index];
    setPlaying(updatedPlaying);

    if (updatedPlaying[index]) {
      videoRefs[index].current.play();
    } else {
      videoRefs[index].current.pause();
    }
  };

  return (
    <div className="video-section">
      <h2>Fortress TV</h2>
      <div className="video-container">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="video-card">
            <video
              ref={videoRefs[index]}
              src={videoUrls[index]}
              controls={false}
              autoPlay={false}
              loop={true}
              muted={true}
              className={isPlaying[index] ? 'playing' : ''}
            />
            <div className="play-button" onClick={() => handleTogglePlay(index)}>
              <FontAwesomeIcon icon={isPlaying[index] ? faPause : faPlay} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;