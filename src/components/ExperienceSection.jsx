import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "AMAZON",
    role: "Software Development Engineer @ Amazon",
    duration: "JUL 2022 - PRESENT",
    points: [
      "Led development of end-to-end region build automation across Route 53 (AWS's DNS web service).",
      "Re-built Route 53's core domain management and DNS systems for a better user experience."
    ],
    highlight: "Amazon"
  },
  {
    company: "WATTPAD",
    role: "Associate Engineer @ Wattpad",
    duration: "MAY 2020 - APR 2021",
    points: [
      "Developed a responsive React web page from scratch for 2B daily requests.",
      "Built web experiences for 80M users and collaborated with senior engineers."
    ],
    highlight: "Wattpad"
  },
  {
    company: "UNIVERSITY OF TORONTO",
    role: "Research Engineer @ University of Toronto",
    duration: "MAY 2021 - SEPT 2021",
    points: [
      "Developed NLP-based framework using Spacy & Stanza to extract health data insights.",
      "Won DCS Research Award ($4,000)."
    ],
    highlight: "University of Toronto"
  },
  {
    company: "CENTIVIZER",
    role: "Software Developer @ Centivizer",
    duration: "SEPT 2019 - APR 2020",
    points: [
      "Built cognitive stimulation tech for dementia patients using WebRTC & Node.js.",
      "Developed video-streaming tools for research purposes."
    ],
    highlight: "Centivizer"
  },
  {
    company: "ORANGE GATE",
    role: "Software Developer Intern @ Orange Gate",
    duration: "MAY 2019 - AUG 2019",
    points: [
      "Created Node.js smart home system with Facebook Messenger & DialogFlow.",
      "Used AutoML, Vision, MongoDB for interactive features."
    ],
    highlight: "Orange Gate"
  }
];

const ExperienceSection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-[#0a192f] text-white py-24 px-6 flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="flex items-center mb-10 text-3xl font-bold text-white">
          <span className="mr-2 text-teal-400">/</span> experience
          <div className="flex-1 h-px ml-4 bg-gray-700"></div>
        </h2>

        <div className="flex flex-col gap-10 md:flex-row">
          {/* Left Sidebar - Tabs */}
          <div className="flex md:flex-col justify-center space-x-4 md:space-x-0 md:space-y-4 text-left w-full md:w-[30%]">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`text-sm md:text-base font-medium tracking-wide w-full text-left ${
                  selected === index
                    ? "text-teal-400 border-l-2 border-teal-400 pl-4"
                    : "text-gray-400 hover:text-teal-300 pl-4 border-l-2 border-transparent"
                } transition-all duration-200`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Right Content with Animation */}
          <div className="relative flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full"
              >
                <h3 className="mb-1 text-xl font-semibold">
                  {experiences[selected].role.split(" @ ")[0]}{" "}
                  <span className="text-teal-400">
                    @ {experiences[selected].highlight}
                  </span>
                </h3>
                <p className="mb-6 text-sm text-gray-400">
                  {experiences[selected].duration}
                </p>
                <div className="space-y-3 text-gray-300">
                  {experiences[selected].points.map((point, i) => (
                    <p key={i} className="flex items-start gap-2">
                      <span className="text-lg leading-5 text-teal-400">▸</span>
                      <span>{point}</span>
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
