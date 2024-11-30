import React from "react";

function CollaborationPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          Collaborate with Us
        </h1>
        <p className="text-gray-700 text-center mb-10">
          Join hands with like-minded individuals, explore exciting projects, and make an impact together!
        </p>

        {/* Explore Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Explore Projects
          </h2>
          <p className="text-gray-600 mb-6">
            Check out ongoing projects and find one that interests you. Collaborate with peers to bring innovative ideas to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Campus Directory App",
                description: "A one-stop app for campus navigation and student resources.",
              },
              {
                title: "Mental Health Support Platform",
                description: "Connect students with counselors and peer mentors.",
              },
              {
                title: "Event Management System",
                description: "Simplify event planning and participation on campus.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Submit Your Ideas Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Submit Your Ideas
          </h2>
          <p className="text-gray-600 mb-6">
            Got an idea for a project? Share it with us, and we’ll help you find collaborators to make it a reality.
          </p>
          <form className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
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
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="idea"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Idea
              </label>
              <textarea
                id="idea"
                placeholder="Describe your idea"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Idea
            </button>
          </form>
        </section>

        {/* Join a Team Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Join a Team
          </h2>
          <p className="text-gray-600 mb-6">
            Browse teams working on various projects and become a valuable contributor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                team: "AI Enthusiasts",
                description: "Focused on building intelligent solutions for real-world problems.",
              },
              {
                team: "Creative Coders",
                description: "A group of passionate developers bringing creative ideas to life.",
              },
              {
                team: "Event Organizers",
                description: "Managing and planning exciting events for the community.",
              },
            ].map((team, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-blue-600 mb-2">
                  {team.team}
                </h3>
                <p className="text-gray-700">{team.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CollaborationPage;
