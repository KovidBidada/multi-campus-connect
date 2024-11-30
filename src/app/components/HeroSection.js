import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-blue-500 text-white py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Campus Connect</h1>
        <p className="text-lg mb-6">
          Connect, Collaborate, and Grow with your peers. Join the campus community now!
        </p>
        <div className="flex justify-center">
        <a
          href="/features"
          className="bg-white text-blue-500 px-6 py-3 mx-2 rounded-full shadow-md hover:bg-gray-200"
        >
          Explore Features
        </a>
        <a
          href="/features"
          className="bg-white text-blue-500 px-6 py-3 mx-2 rounded-full shadow-md hover:bg-gray-200"
        >
          Sign Up
        </a>
        </div>
      </div>
    </div>
  );
}

