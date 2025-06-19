"use client";

import React from "react";
import { motion } from "framer-motion";

function AboutUsSection() {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-300 py-16">
      <div className="container mx-auto px-6 text-center"><br>
    
      
        <motion.h2
          className="text-4xl font-extrabold text-blue-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          What We're About
        </motion.h2>

       
        <motion.p
          className="text-gray-800 max-w-2xl mx-auto text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Student Community Hub is a platform designed to bring students
          together, fostering collaboration, learning, and growth. Our mission
          is to create a supportive and inclusive environment where ideas are
          shared, knowledge is exchanged, and opportunities are created.
        </motion.p>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-4xl text-blue-500 mb-4"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              🤝
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
            <p className="text-gray-600">
              Connect with like-minded peers, mentors, and professionals to
              build a strong network that supports your journey.
            </p>
          </motion.div>

          
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-4xl text-green-500 mb-4"
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ duration: 0.3 }}
            >
              📚
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Learning</h3>
            <p className="text-gray-600">
              Access valuable resources, join discussion forums, and participate
              in workshops to enhance your skills.
            </p>
          </motion.div>

          
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-4xl text-yellow-500 mb-4"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              🚀
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Growth & Opportunities
            </h3>
            <p className="text-gray-600">
              Discover exciting projects, internships, and events to help you
              grow personally and professionally.
            </p>
          </motion.div>
        </div>

      
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
          >
            Join Us Today
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUsSection;
