import React from "react";
import { Github, Facebook, Instagram, UserRound } from "lucide-react";

const About = () => {
  return (
    <section
      id="about-me"
      className="md:mt-10 max-w-300 flex items-center justify-center px-6"
    >
      <div
        className="
        mt-10
        md:mt-0
            border border-white/10
            relative z-20
            p-10 rounded-3xl shadow-2xl
            bg-linear-to-br from-blue-900 via-black to-blue-200
            bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
          "
      >
        <h2 className="text-3xl md:text-5xl font-bold flex items-center gap-3 mb-6 text-white">
          <UserRound size={36} />
          About Me
        </h2>

        <p className="text-white/90 text-base md:text-lg leading-relaxed">
          Hello! I'm Harshit Kumar and I'm a passionate programmer and web
          developer with a strong interest in building clean, functional, and
          user-friendly websites and applications. I enjoy turning ideas into
          digital reality using modern web technologies like HTML, CSS,
          JavaScript, PHP, and MySQL.
        </p>

        {/* CTA */}
        <a
          href="#projects"
          className="
              inline-block
              relative z-30
              bg-gray-500 hover:bg-gray-400
              transition
              px-6 py-2
              rounded-2xl
              mt-6
            "
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default About;
