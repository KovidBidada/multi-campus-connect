"use client";

import React, { useState } from "react";

function ExploreFeaturesPage() {
  const features = [
    {
      title: "Discussion Forums",
      description: "Engage in meaningful discussions with your peers.",
      details:
        "Create threads, reply to posts, and participate in polls to share and gather knowledge on various topics.",
      icon: "💬",
      bgGradient: "bg-gradient-to-r from-blue-500 to-blue-300",
    },
    {
      title: "Resource Sharing",
      description: "Share and access notes, links, and study materials.",
      details:
        "Upload documents, browse shared resources, and save important materials for future use.",
      icon: "📚",
      bgGradient: "bg-gradient-to-r from-green-500 to-green-300",
    },
    {
      title: "Event Updates",
      description: "Stay informed about workshops, hackathons, and meetups.",
      details:
        "Receive notifications about upcoming events, register seamlessly, and never miss an opportunity to grow.",
      icon: "📅",
      bgGradient: "bg-gradient-to-r from-red-500 to-red-300",
    },
    {
      title: "Project Collaborations",
      description: "Find teammates and collaborate on exciting projects.",
      details:
        "Create or join project groups, manage tasks, and collaborate with others to bring ideas to life.",
      icon: "🛠️",
      bgGradient: "bg-gradient-to-r from-yellow-500 to-yellow-300",
    },
  ];

  const [activeFeature, setActiveFeature] = useState(null);

  const toggleFeature = (index) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Explore Features
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Discover the highlights of our platform. Click on any feature to learn
          more!
        </p>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${feature.bgGradient} ${
                activeFeature === index
                  ? "scale-105 text-white"
                  : "text-gray-800"
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFeature(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <div className="text-2xl">
                  {activeFeature === index ? "▲" : "▼"}
                </div>
              </div>
              {activeFeature === index && (
                <div className="mt-4 text-gray-100">
                  <p className="mb-2">{feature.description}</p>
                  <p className="text-sm">{feature.details}</p>
                <br>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreFeaturesPage;

