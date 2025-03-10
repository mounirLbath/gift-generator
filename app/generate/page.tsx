"use client";
import React, { useState } from "react";
import Link from "next/link";
import TypeText from "../Components/TypeText";
import Footer from "../Components/Footer";

function encodeToBase64(input: string): string {
  return Buffer.from(input).toString("base64");
}

const Home = () => {
  const [message, setMessage] = useState("");
  return (
    <div>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <TypeText sequence={["Gift Generator"]} repeat={0} />
        <input
          type="text"
          placeholder="Enter your very special message here"
          onChange={(e) => {
            setMessage(e.currentTarget.value);
          }}
          className="my-6 p-4 w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <Link
          className="my-10 text-blue-500 hover:text-blue-950"
          href={"/?m=" + encodeToBase64(message)}
        >
          Send the URL of this page to your friend
        </Link>
      </div>
      <Footer isGift={false} />
    </div>
  );
};

export default Home;
