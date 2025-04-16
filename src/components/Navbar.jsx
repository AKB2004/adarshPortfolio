// Navbar.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPen } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#0a192f] text-white shadow-md">
      {/* Left side */}
      <div className="text-xl font-bold text-blue-300">Adarsh Priyadarshi</div>

      {/* Middle nav links */}
      <ul className="flex space-x-6 font-medium text-blue-200">
  <li><a href="#home" className="transition hover:text-teal-300">Home</a></li>
  <li><a href="#about" className="transition hover:text-teal-300">About</a></li>
  <li><a href="#experience" className="transition hover:text-teal-300">Experience</a></li>
  <li><a href="#projects" className="transition hover:text-teal-300">Projects</a></li>
</ul>


      {/* Right side icons */}
      <div className="flex space-x-4 text-blue-200">
        <a href="mailto:example@gmail.com" className="hover:text-teal-300">
          <MdEmail size={20} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
          <FaGithub size={20} />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
          <FaLinkedin size={20} />
        </a>
        <a href="#" className="hover:text-teal-300">
          <FaPen size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
