import "./App.css";
import React, { useEffect, useState } from "react";
import profilepicture from "/images/profilepicture.svg";
import linkedin from "/images/linkedinicon.svg";
import github from "/images/githubicon.svg";
import email from "/images/emailicon.svg";
import uparrow from "/images/uparrowicon.svg";
import resume from "/images/resume.png";
import projects from "./projectdata";

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
      <div className="grid grid-cols-[75%_25%] gap-8">
        <div className="bg-[#454CFF] rounded-[36px] leading-tight text-white">
          <div className="flex flex-row gap-6 h-full">
            <div>
              <h1 className="ml-6 mt-6 text-[70px] font-bold ">
                Kaitlyn Andor
              </h1>
              <h2 className="ml-6 text-[50px] font-light italic">
                Web Developer
              </h2>
              <div className="flex flex-row ml-6 mt-4 gap-8">
                <a href="https://www.linkedin.com/in/kaitlyn-andor/">
                  <img src={linkedin} alt="The LinkedIn logo." className='rounded-[6px] border-4 border-transparent hover:border-[#FF4548]' />
                </a>
                <a href="https://github.com/katie-andor">
                  <img src={github} alt="The GitHub logo." className='rounded-[6px] border-4 border-transparent hover:border-[#FF4548]'/>
                </a>
                <a href="">
                  <img src={email} alt="An email icon." className='rounded-[6px] border-4 border-transparent hover:border-[#FF4548]'/>
                </a>
              </div>
            </div>
            <div className="h-full border-l-[3px] border-white"></div>
            <div className="m-4 flex flex-col justify-around">
              <ul className="text-[30px] italic">
                <a href="#projects-section">
                  <li className='hover:underline'>Projects</li>
                </a>
                <a href="#aboutme-section">
                  <li className='hover:underline'>About Me/Resume</li>
                </a>
                <li>Skills</li>
                <li>Certifications</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <img
            src={profilepicture}
            alt="A photo of Kaitlyn Andor smiling in a portrait style, shoulders up."
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <h2
        className="ml-4 mt-14 text-[45px] text-[#454CFF] font-extrabold"
        id="projects-section"
      >
        Projects
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {projects.map((project, index) => {
          return (
            <a href={project.link} target="_blank">
              <div
                key={index}
                className={`card w-full h-[270px] bg-white rounded-[36px] text-white border-2 border-black flex flex-col relative group overflow-hidden transform transition-all duration-1000 ease-out ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <img src={project.image} alt={project.alt} />
                <div className="flex flex-grow"></div>
                <div
                  className="bg-black rounded-bl-[36px] rounded-br-[36px] absolute bottom-4 w-full transition-all duration-500 ease-in-out group-hover:h-full group-hover:translate-y-[40px] transform translate-y-[290px] flex flex-col"
                  style={{ height: "300px" }}
                >
                  <div className="flex justify-center items-center">
                    <img
                      className="w-[30px] mt-2"
                      src={uparrow}
                      alt="An up arrow icon."
                    />
                  </div>
                  <div className="flex flex-col opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out transform translate-y-10 m-4 z-10">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-lg">{project.description}</p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="bg-[#454CFF] rounded-[36px] mt-18">
        <div className="grid grid-cols-2 h-[550px] m-8 text-white text-[45px] font-extrabold">
          <div>
            <h2 id="aboutme-section">About Me</h2>
            <p className="mb-4 text-[22px] font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae elementum nisl. Vivamus consequat nisl tincidunt
              massa placerat, quis sagittis nulla tristique. Phasellus eu tellus
              nisl. Ut at libero nibh. Nam id est vestibulum, pretium purus
              lacinia, blandit nisl. Praesent ipsum tellus, porttitor nec
              rhoncus quis, gravida sit amet nulla. Fusce sit amet turpis nec
              arcu tristique bibendum posuere a dolor. Aliquam tincidunt
              condimentum vestibulum. Fusce ultricies sodales purus in finibus.
              Aliquam efficitur metus mi, eget vulputate diam mollis in.
              Pellentesque finibus molestie ipsum, in suscipit lacus. Sed ligula
              libero, commodo ac nunc in, cursus faucibus eros. Aenean tincidunt
              erat libero, at maximus sapien ultrices sit amet. Cras aliquet
              tortor facilisis mattis rutrum. Vivamus nulla justo, cursus vitae
              ipsum in, sagittis faucibus augue.
            </p>
          </div>
          <div>
            <h2 className="ml-6 ">Resume</h2>
            <div className="overflow-y-scroll h-[450px]">
              <img
                src={resume}
                alt="kaitlyn andor's resume"
                className="w-[93%] mr-auto ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
