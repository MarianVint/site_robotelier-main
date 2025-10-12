import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/xn9sqzOeZbI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;