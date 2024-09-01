import { Reveal } from "../styles/animations/Reveal";

const AboutMe = () => {
  return (
    <div className="flex flex-col w-3/4 items-start justify-start">
      <Reveal>
        <div className="flex flex-col">
          <p className=" text-5xl max-[580px]:text-3xl font-bold">About me</p>
        </div>
        <p className=" text-gray-400 font-bold text-3xl max-[580px]:text-xl">
          I'm a <span className="">Computer Scientist </span>
          and a{" "}
          <span className="primaryTextColor">Full Stack Swift Developer</span>.
          Always looking for the best solution, keeping a{" "}
          <span className="primaryTextColor">pixel perfect quality</span>.{" "}
        </p>
      </Reveal>
    </div>
  );
};

export default AboutMe;
