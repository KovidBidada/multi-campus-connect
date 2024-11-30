"use client";

import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig"; // Adjust path to your firebaseConfig
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link"; // Using Link component for navigation

export default function HeroSection() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // State to handle loading status

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false); // Finished loading
    });

    // Cleanup the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  // Render nothing until the component is mounted on the client
  if (loading) {
    return null; // Avoid rendering until authentication is checked
  }

  return (
    <div className="bg-blue-500 text-white py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Campus Connect</h1>
        {user ? (
          <p className="text-4xl font-bold mb-4">Hello, {user.displayName}!</p>
        ) : (
          <p className="text-lg mb-6">
            Connect, Collaborate, and Grow with your peers. Join the campus community now!
          </p>
        )}
        <div className="flex justify-center">
          <Link href="/features" className="bg-white text-blue-500 px-6 py-3 mx-2 rounded-full shadow-md hover:bg-gray-200">
            Explore Features
          </Link>
        </div>
      </div>
    </div>
  );
}
