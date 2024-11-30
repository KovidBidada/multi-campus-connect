import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Campus Connect</h1>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-gray-200">Home</a></li>
          <li><a href="/forums" className="hover:text-gray-200">Forums</a></li>
          <li><a href="/resources" className="hover:text-gray-200">Resources</a></li>
          <li><a href="/event" className="hover:text-gray-200">Events</a></li>
          <li><a href="/collaboration" className="hover:text-gray-200">Collaboration</a></li>
          <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
