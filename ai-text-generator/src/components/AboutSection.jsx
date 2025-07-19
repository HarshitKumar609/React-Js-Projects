import React from "react";

function AboutSection() {
  return (
    <div className="max-w-2xl mx-auto h-screen flex itme-center flex-col justify-center gap-2">
      <details className="border border-gray-300 rounded-md shadow-sm open:shadow-md transition-all">
        <summary className="cursor-pointer bg-gray-100 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-200 rounded-t-md">
          What is QueryBot ?
        </summary>
        <div className="px-4 py-2 text-gray-600 bg-white rounded-b-md">
          <p>
            QueryBot is an AI Text Generator that generator text using the
            Google gemini Api to solve your Query.
          </p>
        </div>
      </details>

      <details className="border border-gray-300 rounded-md shadow-sm open:shadow-md transition-all">
        <summary className="cursor-pointer bg-gray-100 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-200 rounded-t-md">
          What Tech Stack it use ?
        </summary>
        <div className="px-4 py-2 text-gray-600 bg-white rounded-b-md">
          <p>QueryBot is up using the React js, Tailwind and the gemini api</p>
        </div>
      </details>

      <details className="border border-gray-300 rounded-md shadow-sm open:shadow-md transition-all">
        <summary className="cursor-pointer bg-gray-100 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-200 rounded-t-md">
          Why I made this ?
        </summary>
        <div className="px-4 py-2 text-gray-600 bg-white rounded-b-md">
          <p>I made this QueryBot as my practice react project.</p>
        </div>
      </details>
    </div>
  );
}

export default AboutSection;
