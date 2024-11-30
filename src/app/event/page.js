import React from "react";

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
        <p className="text-gray-700 text-center mb-8">
          Discover and participate in our exciting events, workshops, and
          meetups.
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
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-semibold">Date:</span> {event.date}
                  </p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-semibold hover:underline"
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
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-600 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-semibold">Date:</span> {event.date}
                  </p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-semibold hover:underline"
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
