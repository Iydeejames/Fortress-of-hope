import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import './VideoSection.css';

const VideoSection = () => {
  const videoRefs = Array.from({ length: 6 }, () => useRef(null));
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

    // Add your desired transition effect here (e.g., fade in or slide in)
    if (isVisible) {
      videoRefs.forEach((ref, index) => {
        ref.current.style.transition = 'opacity 1s ease-in-out';
        ref.current.style.opacity = '1';
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="video-section" className="video-section">
      <h1 className="video-section-heading">Fortress TV</h1>
      <div className="videos-container">
        {videoRefs.map((videoRef, index) => (
          <div key={index} className="video-wrapper" ref={videoRef}>
            <video
              src={`path/to/video${index + 1}.mp4`} // Replace with your video paths
              controls={false}
              loop
              muted
              autoPlay={isPlaying[index]}
            ></video>
            <div className="overlay"></div>
            <button className="play-pause-btn" onClick={() => handlePlayPause(index)}>
              {isPlaying[index] ? 'Pause' : 'Play'}
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