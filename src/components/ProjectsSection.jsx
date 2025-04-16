import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projectData = [
  {
    title: "Tall Tales",
    description:
      "A multi-player story-telling web game for 3-5 players. Uses sockets for real-time gameplay.",
    stack: "NODE.JS, REACT.JS, MONGODB",
    image: "./src/img/red.jpeg",
    github: "#",
    demo: "#",
  },
  {
    title: "Project Two",
    description: "Another awesome project with cool features.",
    stack: "REACT, NODE, EXPRESS",
    image: "./src/img/blue.jpeg",
    github: "#",
    demo: "#",
  },
  {
    title: "Project Three",
    description: "This project does something cool and useful.",
    stack: "NEXT.JS, FIREBASE",
    image: "./src/img/yellow.jpeg",
    github: "#",
    demo: "#",
  },
  {
    title: "Project Four",
    description: "Final project in the carousel lineup.",
    stack: "HTML, CSS, JS",
    image: "./src/img/green.jpeg",
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projectData.length);
    resetTimer();
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projectData.length) % projectData.length);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projectData.length);
    }, 8000);
  };

  useEffect(() => {
    resetTimer(); // initialize on mount
    return () => clearInterval(timerRef.current); // clean up on unmount
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2 },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="projects" className="w-full bg-[#0a192f] text-white py-24 px-6 flex items-center">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="flex items-center mb-10 text-3xl font-bold text-white">
          <span className="mr-2 text-teal-400">/</span> pet projects
          <div className="flex-1 h-px ml-4 bg-gray-700"></div>
        </h2>

        <div className="relative w-full h-[500px] md:h-[450px] flex items-center justify-center overflow-hidden mx-auto">
        <button
  onClick={prevSlide}
  className="absolute z-10 text-2xl text-white transition-colors left-4 hover:text-gray-900"
>
  <FaArrowLeft />
</button>
<button
  onClick={nextSlide}
  className="absolute z-10 text-2xl text-white transition-colors right-4 md:right-6 hover:text-gray-900"
>
  <FaArrowRight />
</button>



          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute flex flex-col items-center justify-center w-full h-full p-6 overflow-hidden bg-center bg-cover rounded-xl"
              style={{ backgroundImage: `url(${projectData[current].image})` }}
            >
              <div className="max-w-xl p-6 text-center bg-black rounded-lg bg-opacity-70">
                <h3 className="mb-2 text-2xl font-semibold">{projectData[current].title}</h3>
                <p className="mb-4 text-sm text-gray-300">{projectData[current].description}</p>
                <p className="mb-4 font-mono text-xs text-teal-400">{projectData[current].stack}</p>
                <div className="flex justify-center gap-6 text-xl text-white">
                  <a href={projectData[current].github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="transition hover:text-teal-400" />
                  </a>
                  <a href={projectData[current].demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="transition hover:text-teal-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {projectData.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === current ? "bg-teal-400" : "bg-gray-500"}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
