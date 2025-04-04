import "./App.css";
import React, { useEffect, useState } from "react";
import profilepicture from "/images/profilepicture.svg";
import linkedin from "/images/linkedinicon.svg";
import linkedinblack from "/images/linkediniconblack.svg";
import github from "/images/githubicon.svg";
import githubblack from "/images/githubiconblack.svg";
import emailblack from "/images/emailiconblack.svg";
import email from "/images/emailicon.svg";
import uparrow from "/images/uparrowicon.svg";
import resume from "/images/resume.png";
import uxcertification from "./certifications/uxdesign.png";
import backendcertification from "./certifications/backend.png";
import projects from "./projectdata.js";
import skills from "./skillsdata.js";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-[74%_24%] grid-cols-1 sm:gap-8">
        <div className="bg-[#454CFF] rounded-[36px] leading-tight text-white">
          <div className="flex flex-row items-center sm:justify-start gap-4 sm:gap-6 h-full">
            <div>
              <h1 className="ml-6 mt-0 sm:mt-6 text-[25px] sm:text-[35px] lg:text-[50px] xl:text-[70px] font-bold ">
                Kaitlyn Andor
              </h1>
              <h2 className="ml-6 sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-light italic">
                Web Developer
              </h2>
              <div className="hidden sm:flex flex-row ml-6 md:mt-2 lg:mt-4 sm:gap-4 md:gap-8">
                <a href="https://www.linkedin.com/in/kaitlyn-andor/" target="_blank">
                  <img
                    title="Linkedin"
                    src={linkedin}
                    alt="The LinkedIn logo."
                    className="w-[40px] sm:w-[50px] lg:w-[75px] rounded-[6px] border-4 border-transparent hover:border-white"
                  />
                </a>
                <a href="https://github.com/katie-andor" target="_blank">
                  <img
                    title="Github"
                    src={github}
                    alt="The GitHub logo."
                    className="w-[40px] sm:w-[50px] lg:w-[75px] rounded-[6px] border-4 border-transparent hover:border-white"
                  />
                </a>
                <a href="mailto:kaitlynandor@gmail.com" target="_blank">
                  <img
                    title="kaitlynandor@gmail.com"
                    src={email}
                    alt="An email icon."
                    className="w-[40px] sm:w-[50px] lg:w-[75px] rounded-[6px] border-4 border-transparent hover:border-white"
                  />
                </a>
              </div>
            </div>
            <div className="h-full border-l-[3px] border-white"></div>
            <div className="m-4 flex flex-col justify-around">
              <ul className="sm:text-[25px] md:text-[20px] lg:text-[30px] italic">
                <a href="#projects-section">
                  <li className="hover:underline">Projects</li>
                </a>
                <a href="#aboutme-section">
                  <li className="hover:underline">About Me/Resume</li>
                </a>
                <a href="#skills-section">
                  <li className="hover:underline">Skills</li>
                </a>
                <a href="#certification-section">
                  <li className="hover:underline">Certifications</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-4 justify-center sm:hidden mt-4">
            <a href="https://www.linkedin.com/in/kaitlyn-andor/">
              <img
                src={linkedin}
                alt="The LinkedIn logo."
                className="w-[55px] bg-[#454CFF] rounded-[40px] p-[10px]"
              />
            </a>
            <a href="https://github.com/katie-andor">
              <img
                src={github}
                alt="The GitHub logo."
                className="w-[55px] bg-[#454CFF] rounded-[40px] p-[10px]"
              />
            </a>
            <a href="">
              <img
                src={email}
                alt="An email icon."
                className="w-[55px] bg-[#454CFF] rounded-[40px] p-[10px]"
              />
            </a>
          </div>
          <img
            src={profilepicture}
            alt="A photo of Kaitlyn Andor smiling in a portrait style, shoulders up."
            className="mt-4 sm:mt-0 w-[150px] sm:w-[200px] lg:w-[270px] mr-auto ml-auto"
          />
        </div>
      </div>
      <h2
        className="ml-0 sm:ml-4 sm:mt-8 md:mt-14 text-[35px] sm:text-[45px] text-[#454CFF] font-extrabold"
        id="projects-section"
      >
        Projects
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project, index) => {
          return (
            <a href={project.link} target="_blank">
              <div
                key={index}
                className={`card w-full h-[50vw] sm:h-[370px] md:h-[250px] lg:h-[300px] xl:h-[250px] 2xl:h-[330px] bg-white rounded-[36px] text-white border-2 border-black flex flex-col relative group overflow-hidden transform transition-all duration-1000 ease-out ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <img className="h-full" src={project.image} alt={project.alt} />
                <div className="hidden md:flex flex-grow"></div>
                <div
                  className="h-[300px] bg-black rounded-bl-[36px] rounded-br-[36px] absolute bottom-4 w-full transition-all duration-500 ease-in-out group-hover:h-full 
                  md:group-hover:translate-y-[16px] md:transform md:translate-y-[290px] 
                  lg:group-hover:translate-y-[16px] lg:transform lg:translate-y-[370px] lg:h-[390px] 
                  xl:group-hover:translate-y-[16px] xl:transform xl:translate-y-[380px] xl:h-[390px] 
                  2xl:group-hover:translate-y-[15px] 2xl:transform 2xl:translate-y-[370px] 2xl:h-[390px] 
                  hidden md:flex flex-col"
                >
                  <div className="flex justify-center items-center">
                    <img
                      className="w-[30px] mt-2"
                      src={uparrow}
                      alt="An up arrow icon."
                    />
                  </div>
                  <div className="flex flex-col h-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out transform translate-y-10 mr-6 ml-6 mb-6 xl:mt-2 2xl:mt-4 z-10">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-lg md:text-sm lg:text-lg xl:text-sm 2xl:text-lg">{project.description}</p>
                    <div className=" flex flex-grow"></div>
                    <div className="flex flex-row mb-4 xl:mt-2 gap-4">
                      {project.tools.map((tool, i) => (
                        <p
                          key={i}
                          className="border-white border-solid border-2 pl-2 pr-2 rounded-[5px]"
                        >
                          {tool}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:hidden bg-black text-white mt-4 p-4 rounded-[36px]">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-md mt-2">{project.description}</p>
              </div>
            </a>
          );
        })}
      </div>
      <div className="bg-[#454CFF] w-full mr-auto ml-auto rounded-[36px] mt-18">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 m-4 md:m-8 text-white text-[35px] sm:text-[45px] font-extrabold">
          <div className="mt-4 lg:mt-4">
            <h2 id="aboutme-section" className="text-[35px] sm:text-[45px]">About Me</h2>
            <p className="mb-4 text-[17px] sm:text-[22px] xl:text-[25px] font-light">
              My name is Kaitlyn Andor and I'm a Web Developer based in New York. I am a motivated, self-starter with a passion for development, UX/UI design, and an attention to detail that transforms project concepts into polished products.
            </p>
            <p p className="mb-4 text-[17px] sm:text-[22px] xl:text-[25px] font-light">Through my work, I hope to make the web a more accessible to all by prioritizing the WCAG (Web Content Accessibility Guidelines), ADA (Americans with Disabilities Act), and mobile first/responsive design.</p>
          </div>
          <div className="mt-4 lg:mt-4">
            <h2 className="ml-0 lg:ml-6 text-[35px] sm:text-[45px]">Resume</h2>
            <div className="overflow-y-scroll mb-4 h-[375px] sm:h-[450px]">
              <img
                src={resume}
                alt="kaitlyn andor's resume"
                className="w-full sm:w-[93%] mr-auto ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <h2
        className="ml-0 sm:ml-4 mt-14 text-[35px] sm:text-[45px] text-[#454CFF] font-extrabold"
        id="skills-section"
      >
        Skills
      </h2>
      <div className="flex flex-row justify-evenly flex-wrap">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              tabIndex={0}
              className="bg-[#454CFF] hover:bg-black rounded-[50px] text-white text-[17px] sm:text-[22px] w-[130px] sm:w-[200px] mt-2 mb-4 sm:m-4 flex flex-row justify-evenly items-center p-2 transition-transform duration-300 hover:scale-115"
            >
              <img
                src={skill.image}
                alt={skill.alt}
                className="w-[30px] sm:w-[50px]"
              />
              <h3>{skill.caption}</h3>
            </div>
          );
        })}
      </div>
      <h2
        className="ml-0 sm:ml-4 mt-14 text-[35px] sm:text-[45px] text-[#454CFF] font-extrabold"
        id="certification-section"
      >
        Certifications
      </h2>
      <div className="flex flex-row flex-wrap justify-center md:justify-evenly bg-black w-full rounded-[36px]">
        <img
          tabIndex={0}
          src={uxcertification}
          alt="A certification for Google's UX Design course."
          className="w-[80vw] sm:w-[95%] md:w-[45%] rounded-[12px] m-2 md:m-4"
        />
        <img
          tabIndex={0}
          src={backendcertification}
          alt="A certification for Free Code Camp's Backend and API course."
          className="w-[80vw] sm:w-[95%] md:w-[45%] rounded-[12px] m-2 md:m-4"
        />
      </div>
    </>
  );
}

export default App;
