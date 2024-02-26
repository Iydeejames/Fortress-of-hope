
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


const VideoSection = () => {
  const [videoRefs, setVideoRefs] = useState(Array(6).fill(null));
  const [isPlaying, setIsPlaying] = useState(Array(6).fill(false));

  const handlePlayPause = (index) => {
    const updatedPlayingState = [...isPlaying];
    updatedPlayingState[index] = !updatedPlayingState[index];
    setIsPlaying(updatedPlayingState);
  };

  const handleScroll = () => {
    // Check if the video section is in the viewport
    const section = document.getElementById('video-section');
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    // Check if videoRefs are initialized
    if (videoRefs.some((ref) => ref === null)) {
      return;
    }

    // Play/pause logic can be added here if needed

    // Add your desired transition effect here (e.g., fade in or slide in)
    // This example uses opacity as a simple fade-in effect
    if (isVisible) {
      videoRefs.forEach((ref) => {
        ref.style.transition = 'opacity 1s ease-in-out';
        ref.style.opacity = '1';
      });
    }
  };

  useEffect(() => {
    // Set up videoRefs array with references to video elements
    setVideoRefs(videoRefs.map((_, index) => document.getElementById(`video-${index}`)));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [videoRefs]); // Add videoRefs as a dependency to the useEffect

  return (
    <div id="video-section" className="video-section">
      <h1 className="video-section-heading">Fortress TV</h1>
      <div className="videos-container">
        {videoRefs.map((videoRef, index) => (
          <div key={index} className="video-wrapper" id={`video-${index}`}>
            <video
              src={`src/imgs/FI${index % 2 + 8}.MOV`} // Alternating between FI8.MOV and FI9.MOV
              controls={false}
              loop
              muted
              autoPlay={isPlaying[index]}
            ></video>
            <button className="play-pause-btn" onClick={() => handlePlayPause(index)}>
              <FontAwesomeIcon icon={isPlaying[index] ? faPause : faPlay} />
            </button>
          </div>
        ))}
      </div>
      <Link to="video-section" smooth={true} duration={1000} className="scroll-down-link">
        Scroll Down
      </Link>
    </div>
  );
};

export default VideoSection;