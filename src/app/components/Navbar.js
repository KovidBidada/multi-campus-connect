"use client";

import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase/firebaseConfig"; // Adjust path to your firebaseConfig
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import Link from "next/link"; // Using Link component for navigation

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User info: ", user);
    } catch (error) {
      console.error("Error during Google sign-in", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg md:text-3xl sm:text-sm font-bold">Campus Connect</h1>

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

        {/* Menu Links for Desktop */}
        <ul className="md:flex space-x-6 hidden ">
          <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link href="/forum" className="hover:text-gray-200">Forums</Link></li>
          <li><Link href="/resource" className="hover:text-gray-200">Resources</Link></li>
          <li><Link href="/event" className="hover:text-gray-200">Events</Link></li>
          <li><Link href="/collaboration" className="hover:text-gray-200">Collaboration</Link></li>
          <li><Link href="/contact" className="hover:text-gray-200">Contact</Link></li>
        </ul>

        {/* Sign-in/Sign-out button */}
        <div className="flex items-center space-x-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            user ? (
              <button
                onClick={handleSignOut}
                className="bg-white text-blue-500 px-6 py-2 rounded-full shadow-md hover:bg-gray-200"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={handleGoogleSignUp}
                className="bg-white text-blue-500 px-6 py-2 rounded-full shadow-md hover:bg-gray-200"
              >
                Sign Up
              </button>
            )
          )}
        </div>
      </div>

      {/* Mobile Menu */}
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
