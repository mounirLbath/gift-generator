import React, { Suspense } from "react";
import ConfettiWindow from "./ConfettiWindow";
import Message from "./Message";

const GiftText = () => {
  return (
    <div className="m-[5%]">
      <ConfettiWindow />
      <h1 className="text-center text-5xl md:text-7xl lg:text-8xl animate-wiggle">
        <Suspense fallback={<div>Loading...</div>}>
          <Message />
        </Suspense>
      </h1>
    </div>
  );
};

export default GiftText;
