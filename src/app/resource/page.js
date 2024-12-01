import React from "react";
import { FaCode, FaGraduationCap, FaBriefcase, FaVideo, FaBookOpen } from "react-icons/fa"; // Import icons for categories

function ResourcesPage() {
  const resources = [
    {
      category: "Programming",
      icon: <FaCode className="text-3xl text-blue-600" />,
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
        {
          title: "Exercism",
          description: "Practice programming with mentor-led exercises.",
          link: "https://exercism.io/",
        },
      ],
    },
    {
      category: "Personal Development",
      icon: <FaGraduationCap className="text-3xl text-green-600" />,
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
        {
          title: "Skillshare",
          description: "Creative and business classes for growth.",
          link: "https://www.skillshare.com/",
        },
      ],
    },
    {
      category: "Career Guidance",
      icon: <FaBriefcase className="text-3xl text-yellow-500" />,
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
        {
          title: "Glassdoor",
          description: "Company reviews and salary information.",
          link: "https://www.glassdoor.com/",
        },
      ],
    },
    {
      category: "Media & Inspiration",
      icon: <FaVideo className="text-3xl text-red-600" />,
      items: [
        {
          title: "YouTube",
          description: "Endless tutorials, documentaries, and vlogs.",
          link: "https://www.youtube.com/",
        },
        {
          title: "Medium",
          description: "Read thought-provoking articles and stories.",
          link: "https://medium.com/",
        },
      ],
    },
    {
      category: "Books & Reading",
      icon: <FaBookOpen className="text-3xl text-purple-600" />,
      items: [
        {
          title: "Project Gutenberg",
          description: "Free classic books and literature.",
          link: "https://www.gutenberg.org/",
        },
        {
          title: "Goodreads",
          description: "Track books, reviews, and recommendations.",
          link: "https://www.goodreads.com/",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          Curated Resources
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">
          Explore a curated list of resources designed to help you learn, grow, and succeed in various fields.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {resource.icon}
                <h2 className="ml-4 text-2xl font-semibold text-blue-600">{resource.category}</h2>
              </div>
              <ul className="space-y-4">
                {resource.items.map((item, idx) => (
                  <li key={idx} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out">
                    <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-semibold hover:underline transition-all duration-300"
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
