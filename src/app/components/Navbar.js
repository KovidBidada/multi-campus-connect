"use client";

import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text- md:text-3xl sm:text-sm font-bold">Campus Connect</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <ul
          className={`md:flex space-x-6 hidden md:block`}
        >
          <li><a href="/" className="hover:text-gray-200">Home</a></li>
          <li><a href="/forum" className="hover:text-gray-200">Forums</a></li>
          <li><a href="/resource" className="hover:text-gray-200">Resources</a></li>
          <li><a href="/event" className="hover:text-gray-200">Events</a></li>
          <li><a href="/collaboration" className="hover:text-gray-200">Collaboration</a></li>
          <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-blue-700 py-4 px-6 space-y-4`}
      >
        <a href="/" className="block hover:text-gray-200">Home</a>
        <a href="/forum" className="block hover:text-gray-200">Forums</a>
        <a href="/resource" className="block hover:text-gray-200">Resources</a>
        <a href="/event" className="block hover:text-gray-200">Events</a>
        <a href="/collaboration" className="block hover:text-gray-200">Collaboration</a>
        <a href="/contact" className="block hover:text-gray-200">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;

