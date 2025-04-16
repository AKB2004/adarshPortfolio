import React from "react";
import { MdEmail } from "react-icons/md";

const HeroSection = () => {
  return (
    <section id="home">
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center text-white">
      {/* Image / tree fractal */}
      <img
        src="/your-fractal-image-path.png"
        alt="fractal-tree"
        className="w-32 h-32 mb-8"
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
      <h2 className="mb-6 text-xl text-gray-400 md:text-2xl">
        I create stuff sometimes.
      </h2>

      {/* Paragraph */}
      <p className="max-w-2xl mb-10 text-gray-400 text-md md:text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem commodi, cupiditate est facere accusamus a fuga quisquam tenetur, molestiae dolore doloremque veniam deleniti numquam unde beatae, pariatur qui quo. Perspiciatis!
      </p>

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
