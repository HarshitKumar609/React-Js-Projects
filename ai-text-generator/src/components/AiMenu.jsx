import React, { useState } from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/Menu.png";
import { FcAbout } from "react-icons/fc";
import { FaHome } from "react-icons/fa";

function AiMenu() {
  const [extended, setExtended] = useState(false);
  return (
    <div
      className={`flex flex-col w-40 transition-all duration-300 absolute z-2 ${
        extended ? "h-screen bg-indigo-400" : "h-16"
      }`}
    >
      <div className="flex items-center p-2">
        <img
          className="h-12 w-8 ml-3 cursor-pointer"
          onClick={() => setExtended((prev) => !prev)}
          src={myImage}
          alt="menu icon"
        />

        {extended && (
          <h2 className="ml-5 text-3xl font-mono font-bold">Menu</h2>
        )}
      </div>

      {extended && (
        <div className="flex items-center flex-col gap-2 mb-3">
          <Link to="/" className="flex  items-center gap-2  mt-4">
            <FaHome className="w-10 h-8" />
            <h1 className="text-lg font-mono">Home</h1>
          </Link>
          <Link className="flex items-center gap-2 mb-3" to="/about">
            <FcAbout className="w-10 h-8" />
            <h1 className="text-lg font-mono">About</h1>
          </Link>
        </div>
      )}

      {/* {extended && (
        <div className="mt-auto flex flex-col items-center p-4">
          <a className="flex items-center gap-2 mb-3" href="">
            <img className="h-6 w-6" src={profilePic} alt="Profile" />
            <h1 className="text-lg font-mono">Profile</h1>
          </a>
          <a href="" className="flex items-center gap-2">
            <img className="h-6 w-6" src={setting} alt="Setting" />
            <h1 className="text-lg font-mono">Setting</h1>
          </a>
        </div>
      )} */}
    </div>
  );
}

export default AiMenu;
