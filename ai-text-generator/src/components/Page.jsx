import React, { useState } from "react"; // 👈 Make sure this path is correct
import axios from "axios";
import logo from "../assets/logo.jpg";
import Loader from "./Loader";

function Page() {
  const [prompt, SetPrompt] = useState(" ");
  const [isLoading, SetLoading] = useState(false);
  const [displayRes, SetDisplayRes] = useState("");

  const renderText = (input) => {
    const lines = input.split("\n");

    return lines.map((line, index) => {
      // Check for headings (##)
      if (line.startsWith("## ")) {
        const content = line.replace("## ", ""); // Remove the ## marker
        return (
          <strong
            key={`heading-${index}`}
            style={{ display: "block", marginBottom: "0.5em" }}
          >
            {content}
          </strong>
        );
      }

      // Handle bold text (**)
      const parts = line.split(/(\*\*.*?\*\*)/g); // Split by bold markers
      return (
        <span key={`line-${index}`}>
          {parts.map((part, i) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={`bold-${i}`}>{part.replace(/\*\*/g, "")}</strong>
            ) : (
              part
            )
          )}
          <br /> {/* Line break after each line */}
        </span>
      );
    });
  };

  const callAPi = async () => {
    SetLoading(true);
    const res = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${
        import.meta.env.VITE_API_KEY
      }`,
      method: "POST",
      data: {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
    });
    SetLoading(false);
    console.log(res["data"]["candidates"][0]["content"]["parts"][0]["text"]);
    ShowResult(res["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  };

  const ShowResult = (data) => {
    SetDisplayRes(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      {/* Logo */}
      <div className="mb-8 mt-10 flex items-center justify-between gap-1.5 md:gap-5">
        <img
          src={logo}
          className="w-[20lvw] rounded-full border-2 shadow-md shadow-gray-700 md:w-[10lvw]"
        />
        <h2 className="text-[8lvw] font-bold font-mono text-white md:text-[6lvw] text-shadow-md text-shadow-black">
          QueryBot
        </h2>
      </div>

      {/* Search Box */}
      <div className="w-full max-w-2xl mb-6 bg-gray-50 rounded-lg border-gray-300 outline-2 shadow-black shadow-md">
        <div className="relative w-full flex items-center justify-evenly px-2">
          {/* icon */}
          <div className="inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={(e) => SetPrompt(e.target.value)}
            type="search"
            id="default-search"
            className="block w-full p-4 text-sm text-black font-medium rounded-lg bg-gray-50 outline-none"
            placeholder="Your Query..."
            required
          />
          <button
            onClick={callAPi}
            type="submit"
            className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </div>

      {/* Result Box */}

      <div className="w-full max-w-2xl">
        <pre className="whitespace-pre-wrap break-words text-white bg-black py-4 px-5 border-2 rounded-2xl shadow-md shadow-black">
          {isLoading && <Loader />}
          {!isLoading && renderText(displayRes)}
        </pre>
      </div>
    </div>
  );
}

export default Page;
