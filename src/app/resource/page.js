import React from "react";

function ResourcesPage() {
  const resources = [
    {
      category: "Programming",
      items: [
        {
          title: "FreeCodeCamp",
          description: "Learn programming for free with interactive lessons.",
          link: "https://www.freecodecamp.org/",
        },
        {
          title: "MDN Web Docs",
          description: "Comprehensive resources for web developers.",
          link: "https://developer.mozilla.org/",
        },
      ],
    },
    {
      category: "Personal Development",
      items: [
        {
          title: "TED Talks",
          description: "Inspiring talks on a variety of topics.",
          link: "https://www.ted.com/talks",
        },
        {
          title: "Coursera",
          description: "Online courses from top universities.",
          link: "https://www.coursera.org/",
        },
      ],
    },
    {
      category: "Career Guidance",
      items: [
        {
          title: "LinkedIn Learning",
          description: "Skill-building courses for career growth.",
          link: "https://www.linkedin.com/learning/",
        },
        {
          title: "Indeed Career Guide",
          description: "Tips and advice for job seekers.",
          link: "https://www.indeed.com/career-advice",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          Resources
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Explore a curated list of resources to help you learn, grow, and
          succeed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                {resource.category}
              </h2>
              <ul className="space-y-4">
                {resource.items.map((item, idx) => (
                  <li key={idx} className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-semibold hover:underline"
                    >
                      Visit Site
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
