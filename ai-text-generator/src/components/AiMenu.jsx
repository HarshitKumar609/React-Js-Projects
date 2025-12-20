import React, { useState } from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/Menu.png";
import { IoInformationCircle } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

function AiMenu() {
  const [extended, setExtended] = useState(false);
  return (
    <div
      className={`flex flex-col w-40 transition-all duration-300 absolute z-2 ${
        extended ? "h-screen bg-indigo-400" : "h-16"
      }`}
    >
      <div className="flex items-center p-2">
        <AiMenu
          className="h-10 w-10 ml-3 cursor-pointer p-1 border shadow-[0px_0px_5px_2px_gray]"
          onClick={() => setExtended((prev) => !prev)}
          alt="menu icon"
        />

        {extended && (
          <h2 className="ml-3 text-3xl font-mono font-bold text-shadow-md text-shadow-gray-400">
            Menu
          </h2>
        )}
      </div>

      {extended && (
        <div className="flex items-center flex-col gap-2 mb-3">
          <Link to="/" className="flex  items-center gap-2  mt-4">
            <FaHome className="w-10 h-8" />
            <h1 className="text-lg font-mono">Home</h1>
          </Link>
          <Link className="flex items-center gap-2 mb-3" to="/about">
            <IoInformationCircle className="w-10 h-8" />
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
