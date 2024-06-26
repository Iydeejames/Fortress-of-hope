import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import video1 from '../../assets/imgs/FI8.MOV';
import video2 from '../../assets/imgs/FI9.MOV';

const VideoSection = () => {
  const [isPlaying, setPlaying] = useState(Array(6).fill(false));

  const videoUrls = [video1, video1, video1, video2, video2, video2];
  const videoTitles = ['MESSAGE TITTLE: The benefits of Thanksgiving', 'MESSAGE TITTLE: Hope that does not disappoint', 'MESSAGE TITTLE: Faith Works', 
  'MESSAGE TITTLE: The broken scarlet pt 1', 'MESSAGE TITTLE: The broken scarlet pt 2', 'MESSAGE TITTLE: The Throne of Grace'];

  const handleTogglePlay = (index) => {
    const updatedPlaying = [...isPlaying];
    updatedPlaying[index] = !updatedPlaying[index];
    setPlaying(updatedPlaying);
    

    const videos = document.getElementsByTagName('video');
    for (let i = 0; i < videos.length; i++) {
      if (i === index) {
        if (updatedPlaying[index]) {
          videos[i].play();
        } else {
          videos[i].pause();
        }
      } else {
        videos[i].pause();
      }
    }
  };

  return (
    <div className="video-section">
      <h2>Fortress TV</h2>

      <div className="video-container">
      <div className='floating-background'></div>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="video-card">
            <div className="video-wrapper">
              <video
                src={videoUrls[index]}
                controls={false}
                autoPlay={false}
                loop={true}
                muted={false}
                className={isPlaying[index] ? 'playing' : ''}
              />
              <div className="play-button" onClick={() => handleTogglePlay(index)}>
                <FontAwesomeIcon icon={isPlaying[index] ? faPause : faPlay} />
              </div>
            </div>
            <div className="video-info">
              <h3>
                <a href="">{videoTitles[index]}</a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default VideoSection;