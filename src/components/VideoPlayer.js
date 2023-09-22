import React from 'react';
import videoSource from '../Videofile/Alto1.mp4';  
import posterImage from '../images/videobg.jpeg';  



const VideoPlayer = () => {
  return (
    <div>
     <video
  controls
  src={videoSource}
  poster={posterImage}
  width="1920"
  height="1080"
  className='mt-10'
></video>


    </div>
  );
};

export default VideoPlayer;
