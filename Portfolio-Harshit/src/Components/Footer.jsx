import React, { useState } from "react";
import { Github, Linkedin, Facebook, Users } from "lucide-react";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer className="relative px-6 py-16">
        {/* MAIN FOOTER CARD */}
        <div
          id="contact"
          className="
          max-w-300 mx-auto
          rounded-3xl
          border border-white/10
          bg-linear-to-br from-emerald-900/80 via-black/80 to-emerald-800/80
          backdrop-blur-xl
          shadow-2xl
          p-10 md:p-14
          text-white
        "
        >
          {/* TOP CONTENT */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold">
              Looking to hire a developer?
            </h2>

            <p className="text-white/70 mt-4">
              I'm open to web development, software development, and creative
              tech opportunities.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:harshit3891@gmail.com"
              className="inline-block mt-8 text-xl md:text-2xl font-semibold
                       border-b border-white/40 hover:border-white transition"
            >
              harshit3891@gmail.com
            </a>
          </div>

          {/* NAV LINKS */}
          <div className="flex justify-center gap-8 mt-10 text-white/70">
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#about-me" className="hover:text-white transition">
              About me
            </a>
            <button
              onClick={() => setOpen(true)}
              className="hover:text-white transition"
            >
              Contact
            </button>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-sm text-white/50">
            <p>© 2025 · All rights reserved</p>

            <a
              href="#Home"
              className="hover:text-white transition mt-4 md:mt-0"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

        {/* SOCIAL BUTTONS */}
        <div className="max-w-300 mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <SocialButton
            icon={<Github size={20} />}
            label="GitHub"
            href="https://github.com/HarshitKumar609"
          />
          <SocialButton
            icon={<Linkedin size={20} />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/harshitkumar03/"
          />
          <SocialButton
            icon={<Facebook size={20} />}
            label="Facebook"
            href="https://www.facebook.com/people/Harshit-Singh/pfbid02PF24q4Kzd82VJxxsWJ1rpWg9QEw4W7K6u2NPg1PbTiMMrJhhR6mPdcgAohVcxmwdl/?rdid=MtsvFEwSSxM0xKRe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ARxrxLbjy%2F"
          />
          <SocialButton
            icon={<Users size={20} />}
            label="Unstop"
            href="https://unstop.com/u/harshkum69447"
          />
        </div>
      </footer>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

const SocialButton = ({ icon, label, href }) => {
  return (
    <a
      href={href || "#"} // fallback to "#" if no href is provided
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center justify-center gap-2
        px-4 py-3
        rounded-xl
        bg-white/10
        border border-white/20
        text-white
        backdrop-blur-xl
        shadow-lg
        hover:bg-white/20
        hover:-translate-y-1
        transition
      "
    >
      {icon && icon}
      <span>{label}</span>
    </a>
  );
};

export default Footer;
