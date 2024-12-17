"use client";

import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig"; 
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link"; 
import { motion } from "framer-motion"; 

export default function HeroSection() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false); 
    });

    
    return () => unsubscribe();
  }, []);

  
  if (loading) {
    return null; 
  }

  return (
    <motion.div
      className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-20 text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
     
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-white bg-opacity-20 rounded-full filter blur-lg"
        animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-white bg-opacity-20 rounded-full filter blur-lg"
        animate={{ x: [0, 15, 0], scale: [1, 0.8, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-6"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Campus Connect
        </motion.h1>
        {user ? (
          <motion.p
            className="text-2xl sm:text-3xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hello, {user.displayName}! 🎉
          </motion.p>
        ) : (
          <motion.p
            className="text-lg sm:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Connect, Collaborate, and Grow with your peers. Join the campus
            community now!
          </motion.p>
        )}
        <div className="flex justify-center space-x-4">
          <Link
            href="/features"
            className="bg-white text-blue-500 px-8 py-3 rounded-full shadow-lg font-semibold hover:bg-gray-100 transform transition-all duration-300 hover:scale-105"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
