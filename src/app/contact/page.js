"use client";

import React, { useState } from "react";
import { db } from "../firebase/firebaseConfig"; // Use db for Realtime Database
import { ref, set, push } from "firebase/database"; // Firebase Realtime Database functions
import { toast } from "react-toastify"; // Optional for better user feedback

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debug: Check form data
    console.log("Form Data: ", formData);

    try {
      // Send data to Firebase Realtime Database
      const contactRef = ref(db, "contactMessages"); // 'contactMessages' is the path
      const newContactRef = push(contactRef); // Use push() for generating a unique key
      await set(newContactRef, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(),
      });

      // Debug: Check document reference
      console.log("Message sent to database with ID: ", newContactRef.key);

      // Provide feedback to the user
      setSubmitted(true);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Error sending message. Please try again.");
      console.error("Error sending data to Realtime Database: ", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col justify-center py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-gray-700 text-center mb-8">
          Have any questions or need support? Reach out to us using the form
          below, and we’ll get back to you as soon as possible.
        </p>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-4">
            You can also reach us via the following methods:
          </p>
          <ul className="text-gray-700 list-disc pl-6">
            <li>Email: support@campusconnect.com</li>
            <li>Phone: +91 9990009990</li>
            <li>Address: 1234 Osmania University, Hyderabad</li>
          </ul>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <form
            className="space-y-6 bg-white p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Confirmation Message */}
          {submitted && (
            <div className="mt-6 text-center text-green-600">
              <p>Thank you for reaching out! We will get back to you shortly.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default ContactPage;
