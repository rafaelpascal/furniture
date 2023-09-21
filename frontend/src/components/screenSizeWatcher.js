import React, { useState, useEffect } from "react";

const ScreenSizeWatcher = ({ thresholdSize, onSizeChange }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add a listener to update screen width when the window is resized
    window.addEventListener("resize", updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    // Check if the screen size has reached the threshold
    if (screenWidth <= thresholdSize) {
      onSizeChange(true); // Execute some action when the screen size is below the threshold
    } else {
      onSizeChange(false); // Execute some action when the screen size is above the threshold
    }
  }, [screenWidth, thresholdSize, onSizeChange]);

  return null; // This component doesn't render anything visible
};

export default ScreenSizeWatcher;
