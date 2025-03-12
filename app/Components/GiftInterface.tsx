"use client";
import React, { useState } from "react";
import TypeText from "./TypeText";
import GiftText from "./GiftText";

const GiftInterface = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      {isClicked ? (
        <GiftText />
      ) : (
        <div className=" w-full flex flex-col items-center">
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
      )}{" "}
    </>
  );
};

export default GiftInterface;
