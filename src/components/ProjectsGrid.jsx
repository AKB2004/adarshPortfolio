import React from "react";
import { FaFolder, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "TDSB Homework Management Interface",
    description:
      "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
    stack: "Python (Flask), Vue.js, Bootstrap, SQL",
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Hostel App",
    description: "Helps hostel admins and students track entry-exit, complaints and more.",
    stack: "React Native, Node.js, MongoDB",
    github: "#",
    demo: "#",
  },
  {
    title: "VaLiDiFy",
    description: "Blockchain-based certificate validator using smart contracts.",
    stack: "Solidity, React, IPFS, Node.js",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Site",
    description: "Minimal dev portfolio with smooth animations and dark mode.",
    stack: "React.js, Tailwind CSS",
    github: "#",
    demo: "#",
  },
  {
    title: "HealthTrack",
    description: "A landing page for a health monitoring system prototype.",
    stack: "HTML, CSS, JS",
    github: "#",
    demo: "#",
  },
  {
    title: "Chatty",
    description: "Real-time chat app with socket.io and emoji support.",
    stack: "Node.js, React.js, Socket.io",
    github: "#",
    demo: "#",
  },
];

const ProjectsGrid = () => {
  return (
    <section id="projects" className="w-full bg-[#0a192f] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="flex items-center mb-10 text-3xl font-bold">
          <span className="mr-2 text-teal-400">/</span> featured projects
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#112240] hover:shadow-lg hover:shadow-teal-500/30 transition duration-300 rounded-lg p-6 flex flex-col justify-between min-h-[280px]"
            >
              <div className="flex items-center justify-between mb-4">
                <FaFolder className="text-3xl text-teal-400" />
                <div className="flex space-x-4 text-lg text-white">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="transition hover:text-teal-400" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="transition hover:text-teal-400" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-300">{project.description}</p>
              </div>
              <p className="font-mono text-xs text-teal-400">{project.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
