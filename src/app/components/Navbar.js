"use client";

import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase/firebaseConfig"; // Adjust path to your firebaseConfig
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import Link from "next/link"; // Using Link component for navigation
import { motion, AnimatePresence } from "framer-motion";

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
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.h1
          className="text-2xl md:text-3xl font-extrabold cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Campus Connect
        </motion.h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
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

        {/* Desktop Menu Links */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "Forum", "Resource", "Event", "Collaboration", "Contact"].map(
            (item, index) => (
              <motion.li
                key={item}
                className="hover:text-gray-200 transition duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
              </motion.li>
            )
          )}
        </ul>

        {/* Sign-in/Sign-out button */}
        <div className="flex items-center space-x-4">
          {isLoading ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm"
            >
              Loading...
            </motion.p>
          ) : user ? (
            <motion.button
              onClick={handleSignOut}
              className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
              whileHover={{ scale: 1.1 }}
            >
              Sign Out
            </motion.button>
          ) : (
            <motion.button
              onClick={handleGoogleSignUp}
              className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
              whileHover={{ scale: 1.1 }}
            >
              Sign In
            </motion.button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-blue-700 py-4 px-6 space-y-4"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {["Home", "Forum", "Resource", "Event", "Collaboration", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-white hover:text-gray-200 transition duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
