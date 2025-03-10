"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

interface Props {
  sequence: (string | number)[];
  repeat?: number;
  style?: React.CSSProperties;
}

const TypeText = ({
  sequence,
  repeat = Infinity,
  style = { fontSize: "2em", display: "block", padding: "0.5em" },
}: Props) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      style={style}
      repeat={repeat}
    />
  );
};

export default TypeText;
