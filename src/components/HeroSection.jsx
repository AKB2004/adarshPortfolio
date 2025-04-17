import React from "react";
import { MdEmail } from "react-icons/md";

const HeroSection = () => {
  return (
    <section id="home">
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center text-white">
      {/* Image / tree fractal */}
      <img
        src="./src/img/logo.png"
        alt="fractal-tree"
        className="w-56 h-56 mb-8 -ml-4"
      />

      {/* Main intro */}
      <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
        hi, <span className="font-bold text-teal-400">Adarsh</span> here
        <span className="text-teal-400">.</span>
        <span
  className="text-teal-400 blink-cursor"
  style={{ fontFamily: 'monospace', fontSize: '54px' }}
>
  |
</span>


      </h1>

      {/* Subtitle */}
      <h2 className="mb-6 text-xl text-gray-400 md:text-4xl">
        A Polymath.
      </h2>

      {/* Paragraph */}
      <p className="max-w-3xl text-gray-400 text-md md:text-lg">
        I am a Software Engineer from Bangalore, India. Experienced in developing </p>
        <p className="max-w-3xl text-gray-400 text-md md:text-lg"> multi-model AI & Deep Learning apps and scalable backend servers.</p>  
        <p className="max-w-2xl mb-10 text-gray-400 text-md md:text-lg">Computer Science Engineering '26, at Dayananda Sagar University.</p> 
      

      {/* Say Hi button */}
      <a
        href="mailto:your.email@example.com"
        className="flex items-center gap-2 border border-teal-400 text-teal-400 px-6 py-3 rounded hover:bg-teal-400 hover:text-[#0a192f] transition"
      >
        <MdEmail size={20} /> Say hi!
      </a>
    </div>
    </section>
  );
};

export default HeroSection;
