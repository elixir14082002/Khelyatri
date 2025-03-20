import React from "react";

const SportsCard = () => {
  const sportsData = [
    {
      id: 1,
      name: "Cricket",
      description:
        "Cricket is a bat-and-ball game played between two teams. The sport originated in England and is now popular throughout the Commonwealth countries, particularly in India, Pakistan, Australia, and the West Indies.",
      format: "Test, One Day International (ODI), Twenty20 (T20)",
      equipment: "Bat, ball, wickets, protective gear",
      governing: "International Cricket Council (ICC)",
      icon: "🏏",
      facts: [
        "Second most popular sport in the world",
        "Played on a circular or oval-shaped field",
        "A cricket ball is made of cork covered with leather",
        "The longest format can last up to five days",
      ],
    },
    {
      id: 2,
      name: "Football",
      description:
        "Football, also called soccer in some countries, is a team sport played with a spherical ball. It is played by 250 million players across 200 countries, making it the world's most popular sport.",
      format: "Professional leagues, international tournaments",
      equipment: "Ball, shin guards, cleats/boots",
      governing: "Fédération Internationale de Football Association (FIFA)",
      icon: "⚽",
      facts: [
        "Originated in England in the 19th century",
        "The World Cup is held every four years",
        "Standard matches consist of two 45-minute halves",
        "A regulation football field is 100-130 yards long and 50-100 yards wide",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {sportsData.map((sport) => (
        <div
          key={sport.id}
          className="w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-white border-t-4"
          style={{ borderTopColor: "#2563EB" }} // blue-600 color
        >
          <div className="md:flex">
            {/* Icon/Visual Section */}
            <div className="flex items-center justify-center bg-blue-600 text-white p-8 md:w-1/4">
              <span className="text-8xl">{sport.icon}</span>
            </div>

            {/* Content Section */}
            <div className="p-6 md:w-3/4">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-blue-600">
                  {sport.name}
                </h2>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Global Sport
                </span>
              </div>

              <p className="text-gray-700 mb-4">{sport.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-gray-700">
                    <strong>Formats:</strong> {sport.format}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-gray-700">
                    <strong>Governing Body:</strong> {sport.governing}
                  </span>
                </div>
                <div className="flex items-center col-span-1 md:col-span-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-gray-700">
                    <strong>Equipment:</strong> {sport.equipment}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-lg text-blue-600 mb-2">
                  Key Facts
                </h3>
                <ul className="space-y-2">
                  {sport.facts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-600">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SportsCard;
