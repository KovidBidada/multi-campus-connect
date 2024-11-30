"use client";

import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, like sending data to a backend
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Have any questions or need support? Reach out to us using the form below, and we’ll get back to you as soon as possible.
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
            className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto"
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
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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
