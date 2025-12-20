import React, { useState } from "react";

const projects = [
  {
    title: "Quiz Game",
    image: "./image/ProjectImages/Quiz.png",
    link: "https://harshitkumar609.github.io/Quiz-game/",
    desc: "An interactive quiz game built using JavaScript with score tracking and dynamic questions.",
  },
  {
    title: "To Do List",
    image: "./image/ProjectImages/Todo.png",
    link: "https://harshitkumar609.github.io/to-do-list/",
    desc: "A simple and efficient task manager to add, delete, and track daily tasks.",
  },
  {
    title: "NotoSphere",
    image: "./image/ProjectImages/Noto.png",
    link: "https://note-sphere-vmvo.vercel.app",
    desc: "A full-stack notes application with authentication and cloud storage.",
  },
  {
    title: "Weather Page",
    image: "./image/ProjectImages/weather.jpg",
    link: "https://harshitkumar609.github.io/weather-page/",
    desc: "Real-time weather application using API to fetch temperature and conditions.",
  },
];

const Project = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-5 px-6">
      <h2 className="text-5xl font-bold text-white text-center font-serif mb-12">
        My Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {projects.map((proj, index) => {
          const isFlipped = flippedIndex === index;

          return (
            <div
              key={index}
              className="group [perspective:1000px]"
              onClick={() => handleFlip(index)}
            >
              {/* CARD */}
              <div
                className={`
                  relative h-80 w-[80%] mx-auto md:w-full
                  transition-transform duration-700
                  [transform-style:preserve-3d]

                  /* Desktop hover flip */
                  md:group-hover:[transform:rotateY(180deg)]

                  /* Mobile tap flip */
                  ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
                `}
              >
                {/* FRONT */}
                <div
                  className="
                    absolute inset-0
                    rounded-3xl
                    bg-gradient-to-br from-blue-600 via-gray-800 to-blue-200
                    flex flex-col items-center justify-center
                    p-6
                    shadow-xl
                    [backface-visibility:hidden]
                  "
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-40 h-40 object-cover rounded-2xl mb-4"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    {proj.title}
                  </h3>
                </div>

                {/* BACK */}
                <div
                  className="
                    absolute inset-0
                    rounded-3xl
                    bg-gradient-to-br from-gray-900 via-black to-gray-800
                    text-white
                    p-6
                    flex flex-col items-center justify-center
                    text-center
                    shadow-xl
                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]
                  "
                >
                  <p className="text-white/80 mb-6 text-sm">{proj.desc}</p>

                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()} // prevents re-flip
                    className="
                      px-5 py-2
                      rounded-full
                      bg-blue-600 hover:bg-blue-500
                      transition
                      font-medium
                    "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
