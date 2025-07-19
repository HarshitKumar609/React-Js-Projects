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
      <div className="mb-8 mt-4 flex items-center justify-between gap-5">
        <img src={logo} className="h-28 w-28 rounded-full" />
        <h2 className="text-5xl font-bold font-mono text-white "> QueryBot </h2>
      </div>

      {/* Search Box */}
      <div className="w-full max-w-2xl mb-6">
        <div className="relative">
          <input
            onChange={(e) => SetPrompt(e.target.value)}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Your Query..."
            required
          />
          <button
            onClick={callAPi}
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
          {/* icon */}
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
        </div>
      </div>

      {/* Result Box */}

      <div className="w-full max-w-2xl">
        <pre className="whitespace-pre-wrap break-words text-white bg-black py-4 px-5 border-2 rounded-2xl">
          {isLoading && <Loader />}
          {!isLoading && renderText(displayRes)}
        </pre>
      </div>
    </div>
  );
}

export default Page;
