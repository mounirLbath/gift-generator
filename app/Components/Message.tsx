"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

// Decoder: Converts Base64 back to text
function decodeFromBase64(encoded: string): string {
  return Buffer.from(encoded, "base64").toString("utf-8");
}

const Message = () => {
  const searchParams = useSearchParams();

  let message = decodeFromBase64(searchParams.get("m") || "");
  if (message === "") {
    message = "Happy Birthday!";
  }

  return <>{message}</>;
};

export default Message;
