import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa"; // Import an icon for events

function EventsPage() {
  const events = [
    {
      title: "Hackathon 2024",
      date: "December 15, 2024",
      description:
        "Join our annual hackathon and showcase your innovative solutions. Teams of 1-4 can participate.",
      link: "https://example.com/register-hackathon",
      isUpcoming: true,
    },
    {
      title: "AI & ML Workshop",
      date: "November 20, 2024",
      description:
        "A hands-on workshop on Artificial Intelligence and Machine Learning basics.",
      link: "https://example.com/view-details-ai",
      isUpcoming: false,
    },
    {
      title: "Community Meetup",
      date: "October 5, 2024",
      description:
        "Networking event to meet fellow developers and exchange ideas.",
      link: "https://example.com/view-details-meetup",
      isUpcoming: false,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          Events
        </h1>
        <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
          Discover and participate in our exciting events, workshops, and
          meetups. Explore opportunities to learn and network.
        </p>
        
        {/* Upcoming Events */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events
              .filter((event) => event.isUpcoming)
              .map((event, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <FaRegCalendarAlt className="text-3xl text-blue-600" />
                    <h3 className="ml-4 text-xl font-bold text-blue-600">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-semibold">Date:</span> {event.date}
                  </p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white bg-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200"
                  >
                    Register Now
                  </a>
                </div>
              ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events
              .filter((event) => !event.isUpcoming)
              .map((event, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  <div className="flex items-center mb-4">
                    <FaRegCalendarAlt className="text-3xl text-gray-600" />
                    <h3 className="ml-4 text-xl font-bold text-gray-600">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-semibold">Date:</span> {event.date}
                  </p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 font-semibold py-2 px-4 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    View Details
                  </a>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default EventsPage;
