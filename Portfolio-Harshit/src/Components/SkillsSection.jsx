import React, { useEffect, useState } from "react";

const certificates = [
  "/Certificates/Certificate01.jpg",
  "/Certificates/Certificate02.jpg",
];

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "C#", "Java", "Python", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const SkillsSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section id="skill" className="max-w-300 mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* SKILLS */}
        <div
          className="
            p-8 rounded-3xl
            border border-white/20
            bg-linear-to-br from-blue-900 via-black to-blue-300
            shadow-xl
          "
        >
          <h2 className="text-white text-2xl font-semibold mb-6">Skills</h2>

          <div className="space-y-10">
            {skillGroups.map((group, index) => (
              <div key={index}>
                <h2 className="text-2xl mb-3">{group.title}</h2>
                <hr className="border-white/20 mb-4" />

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="
                    px-4 py-2
                    text-sm md:text-base
                    rounded-full
                    bg-white/10
                    border border-white/20
                    hover:bg-white/20
                    transition
                  "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATE SLIDER */}
        <div
          className="
            relative p-6 rounded-3xl
            border border-white/20
            bg-linear-to-br from-blue-900 via-black to-blue-300
            shadow-xl
          "
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <h2 className="text-white text-2xl font-semibold mb-4 text-center">
            Certificates
          </h2>

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={certificates[index]}
              alt="Certificate"
              className="
                w-full h-96 object-cover
                rounded-2xl
                transition-opacity duration-500
              "
            />
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {certificates.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  index === i ? "bg-blue-400" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
