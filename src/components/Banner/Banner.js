// import React from 'react';
// import './Banner.scss';
// import videoBanner from '../../assets/banner.mp4'
// const Banner = () => {
//   return (
//     <div className="banner">
//       <video src={videoBanner} autoPlay loop muted />
//       <div className="text-overlay">
//         <div className="looping-text">
//           <span>Welcome to my CV</span>
//           <span>Scroll down to understand more about me</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React, { useState } from 'react';
import './Banner.scss';
import videoBanner from '../../assets/banner.mp4';

const Banner = () => {
  // State to check if the video should load
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  // Handle the visibility of the video using Intersection Observer
  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsVideoVisible(true);
    }
  };

  // Set up Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // Trigger when 50% of the video is visible
  });

  const videoRef = React.useRef();

  React.useEffect(() => {
    // Start observing the video element
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="banner">
      {/* Only load video when it becomes visible */}
      <video
        ref={videoRef}
        src={isVideoVisible ? videoBanner : ''}
        autoPlay
        loop
        muted
        preload="auto"
        style={{ opacity: isVideoVisible ? 1 : 0, transition: 'opacity 1s ease' }}
      />
      <div className="text-overlay">
        <div className="looping-text">
          <span>Welcome to my CV</span>
          <span>Scroll down to understand more about me</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;

