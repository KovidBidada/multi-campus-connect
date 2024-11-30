"use client";

import React, { useState } from "react";

function ForumPage() {
  // State to manage thread form input
  const [newThread, setNewThread] = useState({
    title: "",
    content: "",
  });

  // Pre-existing threads
  const [threads, setThreads] = useState([
    {
      id: 1,
      title: "Introduction to Web Development",
      content: "Let's discuss the basics of HTML, CSS, and JavaScript!",
      date: "2024-11-28 10:00 AM",
    },
    {
      id: 2,
      title: "How to prepare for coding interviews?",
      content: "Any tips and resources for preparing for coding interviews?",
      date: "2024-11-27 09:45 AM",
    },
    {
      id: 3,
      title: "Best tools for frontend development",
      content: "What are your favorite tools for building frontend applications?",
      date: "2024-11-26 08:30 AM",
    },
  ]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewThread((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newThread.title && newThread.content) {
      // Add new thread to the list
      setThreads((prevThreads) => [
        ...prevThreads,
        {
          id: threads.length + 1,
          title: newThread.title,
          content: newThread.content,
          date: new Date().toLocaleString(),
        },
      ]);

      // Clear the form
      setNewThread({ title: "", content: "" });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">Forum</h1>

        {/* New Thread Form */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Start a New Thread</h2>
          <form
            className="bg-white p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-semibold mb-2"
              >
                Thread Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter the title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={newThread.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-gray-700 font-semibold mb-2"
              >
                Thread Content
              </label>
              <textarea
                id="content"
                name="content"
                placeholder="Write your post here"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={newThread.content}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Start Thread
            </button>
          </form>
        </section>

        {/* List of Threads */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Threads</h2>
          {threads.length === 0 ? (
            <p className="text-gray-600">No threads yet. Start a conversation!</p>
          ) : (
            <div>
              {threads.map((thread) => (
                <div
                  key={thread.id}
                  className="bg-white p-4 rounded-lg shadow-lg mb-6"
                >
                  <h3 className="text-xl font-semibold text-blue-600">{thread.title}</h3>
                  <p className="text-gray-700 mt-2">{thread.content}</p>
                  <p className="text-gray-500 mt-2 text-sm">Posted on {thread.date}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default ForumPage;

