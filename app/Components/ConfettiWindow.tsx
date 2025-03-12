"use client";
import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const ConfettiWindow = () => {
  const [windowSize, setWindowWidth] = useState({ width: 0, height: 0 });

  // This will run only after the component mounts (client-side)
  useEffect(() => {
    // Function to update window width
    const updateWindowSize = () => {
      setWindowWidth({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial window width on component mount
    updateWindowSize();

    // Add event listener to update width on window resize
    window.addEventListener("resize", updateWindowSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <ReactConfetti
      gravity={0.15}
      width={windowSize.width}
      height={windowSize.height}
    ></ReactConfetti>
  );
};

export default ConfettiWindow;
