import React from "react";

function AboutUsSection() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">What We're About</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-8">
          Student Community Hub is a platform designed to bring students
          together, fostering collaboration, learning, and growth. Our mission
          is to create a supportive and inclusive environment where ideas are
          shared, knowledge is exchanged, and opportunities are created.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-blue-500 mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
            <p className="text-gray-600">
              Connect with like-minded peers, mentors, and professionals to
              build a strong network that supports your journey.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-green-500 mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Learning</h3>
            <p className="text-gray-600">
              Access valuable resources, join discussion forums, and participate
              in workshops to enhance your skills.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-yellow-500 mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Growth & Opportunities
            </h3>
            <p className="text-gray-600">
              Discover exciting projects, internships, and events to help you
              grow personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
