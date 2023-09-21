import React, { useState, useRef, useEffect } from "react";
import "./explore.css";
import { explore } from "../../assets";
import ScreenSizeWatcher from "../screenSizeWatcher";

const Explore = () => {
  const divRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isImageLoaded, setImageLoaded] = useState(false);

  // Function to handle screen size change
  const handleSizeChange = (isSmall) => {
    setIsSmallScreen(isSmall);
  };

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;

      if (div) {
        const rect = div.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        const isImageLoaded =
          rect.top >= 0 && rect.bottom <= window.innerHeight;
        // const img = new Image();
        // img.src = explore;
        // img.onload = () => {
        // };
        setImageLoaded(isImageLoaded);
        setIsVisible(isVisible);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Initial check for visibility
    handleScroll();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="container__container">
      <div className="explore__container">
        <div className="explore__container-text">
          <h6>EXPLORE MORE</h6>
          <h2>FIND THE BEST SOFA FOR YOU</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices
          </p>
          <button>View More</button>
        </div>
        {isSmallScreen ? (
          <div className="sliding-image-container-small">
            <img src={explore} alt="Explore" className="sliding-image-small" />
          </div>
        ) : (
          <div
            ref={divRef}
            className={`fade-in-image-container ${
              isImageLoaded ? "loaded" : ""
            }`}
          >
            <img src={explore} alt="Explore" className="fade-in-image" />
          </div>
        )}
        <ScreenSizeWatcher
          thresholdSize={800}
          onSizeChange={handleSizeChange}
        />
      </div>
    </section>
  );
};

export default Explore;
