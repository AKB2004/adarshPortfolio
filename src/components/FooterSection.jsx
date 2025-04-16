import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a192f] text-gray-400 py-6 px-4 text-center text-sm">
      <p>
        Built and designed by <span className="text-teal-400 font-semibold">Adarsh Priyadarshi</span>.
      </p>
      <p>All rights reserved. © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
