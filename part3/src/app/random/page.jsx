'use client';
export const dynamic = 'force-dynamic'; // Ensure this page is always dynamic
import React from "react";
import NumberError from "../lib/NumberError"; // corriger chemin si nécessaire

export default function Random() {
const randomNumber = Math.floor(Math.random() * 45 + Date.now() % 1);
  console.log("Random:", randomNumber);

  if (randomNumber < 20) {
    throw new NumberError("Random number is less than 20");
  }

  return <div>Random Number: {randomNumber} </div>;
}
