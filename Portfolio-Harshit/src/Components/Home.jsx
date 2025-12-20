import React from "react";
import { Github, Facebook, Linkedin, Download } from "lucide-react";
const Home = () => {
  return (
    <>
      <section className="max-w-300 mx-auto px-3 md:px-0 pt-30 md:pt-20 grid md:grid-cols-2 gap-10 items-center">
        <div id="Home" className="flex items-center justify-center">
          {/* Card Container */}
          <div
            className="relative p-6 pb-20 grid grid-cols-1 gap-10
                   bg-linear-to-br from-blue-300/70 via-black/70 to-blue-900/70
                   shadow-xl
                   backdrop-blur-[1px]
                   rounded-2xl
                   bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),
                       linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
                        border border-white/50"
          >
            {/* Content */}
            <div className="flex flex-col items-center text-center max-w-lg mx-auto">
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Hii I'm <span className="text-blue-500">Harshit Singh</span>,
                from India
              </h2>

              <span className="text-white/80 text-lg tracking-wide mb-6">
                programmer || web developer
              </span>
            </div>

            {/* Buttons */}
            <div className=" flex justify-between bottom-6 left-0 right-0 mx-auto w-max gap-5">
              <a
                href="./Resume.pdf"
                download
                className="bg-yellow-400 flex justify-center items-center gap-1 rounded-full px-5 py-3 text-black font-medium shadow-md hover:bg-yellow-300 transition"
              >
                <Download size={16} />
                Resume
              </a>

              <a
                href="https://github.com/HarshitKumar609"
                className="bg-yellow-400 flex justify-center items-center gap-1 rounded-full px-5 py-3 text-black font-medium shadow-md hover:bg-yellow-300 transition"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — IMAGE (LOWER) */}
        <div
          className="
            relative rounded-3xl shadow-xl
            bg-linear-to-bl from-blue-300/70 via-black/70 to-blue-900/70
            overflow-hidden
            flex items-center justify-center
            min-h-105
            transform transition-transform duration-500
            md:translate-y-20
            border border-white/10
            my-4 md:my-0
             backdrop-blur-[2px]
             
          "
        >
          <img
            src="/image/abt.jpg"
            alt="Harshit"
            className="
              relative z-10
              h-72 w-72 md:h-90 md:w-90
              object-cover rounded-3xl
              shadow-2xl
              border border-white/20
              [mask-linear-gradient(to_top,transparent,black_20%)]
              [-webkit-mask-image:linear-gradient(to_top,transparent,black_20%)]

            "
          />
        </div>
      </section>
      {/* Social Links */}
      <div
        className="
    relative z-20
    max-w-150
    p-6
    rounded-2xl
    border border-white/20
    shadow-xl
    mx-5 md:mx-0
     backdrop-blur-[1px]
    bg-linear-to-br from-blue-900 via-black to-blue-300
    bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
  "
      >
        <h2 className="text-white text-lg font-semibold text-center">
          Connect with me
        </h2>

        <div className="flex justify-center flex-wrap gap-4 mt-5">
          <a
            href="https://github.com/"
            target="_blank"
            className="
        flex items-center gap-2 px-4 py-2
        rounded-full
        bg-white/10 text-white
        border border-white/20
        hover:text-black hover:bg-blue-400
        transition
      "
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/harshitkumar03/"
            target="_blank"
            className="
        flex items-center gap-2 px-4 py-2
        rounded-full
        bg-white/10 text-white
        border border-white/20
        hover:text-black hover:bg-blue-400
        transition
        
      "
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://www.facebook.com/people/Harshit-Singh/pfbid02PF24q4Kzd82VJxxsWJ1rpWg9QEw4W7K6u2NPg1PbTiMMrJhhR6mPdcgAohVcxmwdl/?rdid=MtsvFEwSSxM0xKRe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ARxrxLbjy%2F"
            className="
        flex items-center gap-2 px-4 py-2
        rounded-full
        bg-white/10 text-white
        border border-white/20
        hover:text-black hover:bg-blue-400
        transition
      "
          >
            <Facebook size={16} />
            Facebook
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
