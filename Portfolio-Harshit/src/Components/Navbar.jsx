import React from "react";
import { Home, User, FolderKanban, Code, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav
        className="
          hidden md:flex
          fixed top-5 left-1/2 -translate-x-1/2
          max-w-300 w-[95%] h-16
          z-50
          rounded-2xl

          bg-white/10
          backdrop-blur-xl
          border border-white/20
          shadow-xl
        "
      >
        <div className="flex items-center justify-between w-full px-10 text-white">
          <span className="text-2xl font-bold flex items-center gap-3">
            <img
              src="./image/logo.jpg"
              alt=""
              className="h-10 rounded-full hidden md:inline-block"
            />
            Harshit Singh
          </span>

          <ul className="flex gap-8 font-medium">
            <li>
              <a href="#Home" className="hover:text-sky-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about-me" className="hover:text-sky-400">
                About
              </a>
            </li>
            <li>
              <a href="#skill" className="hover:text-sky-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-sky-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-sky-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ================= MOBILE ICON NAVBAR ================= */}
      <div
        className="
          md:hidden
          fixed top-4 left-1/2 -translate-x-1/2
          z-50
          w-[95%] max-w-md h-16
          rounded-2xl

          bg-white/10
          backdrop-blur-xl
          border border-white/20
          shadow-xl

          flex items-center justify-around
        "
      >
        <NavIcon icon={<Home size={22} />} link="#Home" />
        <NavIcon icon={<User size={22} />} link="#about-me" />
        <NavIcon icon={<Code size={22} />} link="#skill" />
        <NavIcon icon={<FolderKanban size={22} />} link="#projects" />
        <NavIcon icon={<Mail size={22} />} link="#contact" />
      </div>
    </>
  );
};

const NavIcon = ({ icon, link }) => {
  return (
    <a
      href={link}
      className="
        text-white/70
        hover:text-sky-400
        transition
        flex items-center justify-center
        w-10 h-10 rounded-full
        hover:bg-white/10
      "
    >
      {icon}
    </a>
  );
};

export default Navbar;
