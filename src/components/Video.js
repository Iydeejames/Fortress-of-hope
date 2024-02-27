import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import video1 from './assets/imgs/FI8.MOV';
import video2 from './assets/imgs/FI9.MOV';

const VideoSection = () => {
  const [isPlaying, setPlaying] = useState(false);

  const videoUrls = [video1, video1, video1, video2, video2, video2];

  const handleTogglePlay = () => {
    setPlaying(!isPlaying);
  };

  return (
    <div className="video-section">
      <h2>Fortress TV</h2>
      <div className="video-container">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="video-card">
            <video
              src={videoUrls[index]}
              controls={false}
              autoPlay={false}
              loop={true}
              muted={true}
              className={isPlaying ? 'playing' : ''}
            />
            <div className="play-button" onClick={handleTogglePlay}>
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;