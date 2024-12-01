import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* About Section */}
        <div className="mx-16 transition-transform duration-500 hover:scale-105">
          <h3 className="text-lg font-bold mb-4">About Campus Connect</h3>
          <p className="text-sm">
          Campus Connect is a platform designed to bring students together, fostering friendships, collaboration, and a supportive environment for shared learning. We aim to create a community where students can grow, connect, and thrive together as they explore new opportunities.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="transition-transform duration-500 hover:scale-105">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-200 hover:underline transition-all duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/forum" className="hover:text-gray-200 hover:underline transition-all duration-300">
                Forum
              </Link>
            </li>
            <li>
              <Link href="/resource" className="hover:text-gray-200 hover:underline transition-all duration-300">
                Resource
              </Link>
            </li>
            <li>
              <Link href="/collaboration" className="hover:text-gray-200 hover:underline transition-all duration-300">
                Collaboration
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200 hover:underline transition-all duration-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="transition-transform duration-500 hover:scale-105">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:info@campusconnect.com"
              className="hover:underline hover:text-gray-200 transition-all duration-300"
            >
              info@campusconnect.com
            </a>
          </p>
          <p className="text-sm">Phone: +91 9908597884</p>
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-700 py-6 mt-12 text-center">
        <div className="container mx-auto text-sm">
          <p>&copy; 2024 Campus Connect. All rights reserved.</p>
          <p>
            Made with ❤️ by the Campus Connect Team.
            <br/>
            (Mustafa Rayyan Farhan)
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
