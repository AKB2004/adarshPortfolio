import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full px-6 py-20 bg-[#0a192f] text-white scroll-mt-20">
      <div className="flex flex-col items-center max-w-6xl gap-12 mx-auto md:flex-row">
        {/* Left: About Text */}
        <div className="flex-1">
          <h2 className="flex items-center mb-6 text-3xl font-bold text-white">
            <span className="mr-2 text-teal-400">/</span> about me
            <div className="flex-1 h-px ml-4 bg-gray-700"></div>
          </h2>

          <p className="mb-4 leading-relaxed text-gray-300">
            I am currently a <strong className="text-white">Software Development Engineer</strong> at <span className="font-semibold text-teal-400">Amazon</span>, working in the AWS sector under team Route 53. At the same time, I am undertaking a part-time <strong>Master’s of Science</strong> in <strong>Software Engineering</strong> at <span className="font-semibold text-teal-400">University of Oxford</span>.
          </p>

          <p className="mb-6 leading-relaxed text-gray-300">
            Here are some technologies I have been working with:
          </p>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 gap-2 mb-6 text-gray-400 sm:grid-cols-3">
            <p className="before:content-['▸'] before:text-teal-400 before:mr-2">Typescript</p>
            <p className="before:content-['▸'] before:text-teal-400 before:mr-2">Python</p>
            <p className="before:content-['▸'] before:text-teal-400 before:mr-2">React.js</p>
            <p className="before:content-['▸'] before:text-teal-400 before:mr-2">Java</p>
            <p className="before:content-['▸'] before:text-teal-400 before:mr-2">Javascript ES6+</p>
            <p className="before:content-['▸'] before:text-teal-400 before:mr-2">C#</p>
          </div>

          <p className="leading-relaxed text-gray-300">
            Outside of work, I’m interested in following the developments of science. I also play a lot of video games. And make TikToks.
          </p>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1">
          <img
            src="./src/img/adarsh.jpg"
            alt="profile"
            className="object-cover w-full max-w-sm mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
