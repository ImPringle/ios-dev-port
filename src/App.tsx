import { Reveal } from "./styles/animations/Reveal";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import ProjectsIOS from "./components/ProjectsIOS";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import "react-multi-carousel/lib/styles.css";
import ProjectsMAC from "./components/ProjectsMAC";

export default function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="flex flex-col h-screen w-screen items-center">
        {/* I'm Mario Pringle */}
        <div className="flex flex-col w-3/4 items-center screen-nav justify-center">
          <Reveal>
            <div className="">
              <p className="text-9xl max-[672px]:text-6xl max-[464px]:text-4xl font-bold">
                Hola, I'm Pringle
                <span>.</span>
              </p>
              <p className=" text-6xl max-[672px]:text-4xl max-[464px]:text-2xl grayText">
                I'm a{" "}
                <span className="font-bold primaryTextColor">
                  Swift Developer
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="flex flex-col h-screen items-center my-16">
        {/* About me */}
        <AboutMe />

        {/* Skills */}
        <Skills />

        {/* iOS Projects */}
        <ProjectsIOS />
        {/* macOS Projects */}
        <ProjectsMAC />

        {/* Footer */}
        <div className=" flex bg-slate-100 w-full justify-center">
          <div className="flex py-32 gap-2">
            <a href="https://github.com/ImPringle">
              <FaGithub className="text-3xl opacity-50" />
            </a>
            <a href="https://www.linkedin.com/in/mario-pringle-243401281/">
              <FaLinkedin className="text-3xl opacity-50" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
