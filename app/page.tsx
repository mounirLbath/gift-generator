"use client";
import Message from "./Components/Message";
import TypeText from "./Components/TypeText";
import { Suspense, useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import Footer from "./Components/Footer";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

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
    <div>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div
          className={
            (isClicked ? "hidden" : "block") +
            " w-full flex flex-col items-center"
          }
        >
          <TypeText
            sequence={[
              "Click on the gift.",
              5000,
              "Come on!",
              5000,
              "We're all waiting, click on it!",
              5000,
            ]}
          />
          <button
            className="text-6xl md:text-8xl cursor-pointer"
            onClick={() => {
              setIsClicked(true);
            }}
          >
            🎁
          </button>
        </div>
        <div className={(isClicked ? "block" : "hidden") + " m-[5%]"}>
          <ReactConfetti
            width={windowSize.width}
            height={windowSize.height}
          ></ReactConfetti>
          <h1 className="text-center text-5xl md:text-7xl lg:text-8xl">
            <Suspense fallback={<div>Loading...</div>}>
              <Message />
            </Suspense>
          </h1>
        </div>
      </div>
      <Footer isGift={true} />
    </div>
  );
}
