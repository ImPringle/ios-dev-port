import React from "react";
import { Reveal } from "../styles/animations/Reveal";
import SkillCard from "../components/SkillCard";

// Icons
import swift from "../assets/img/swift-15.svg";
import swiftui from "../assets/img/swiftui-96x96_2x.png";
import swiftdata from "../assets/img/swiftdata-96x96_2x.png";
import cloudkit from "../assets/img/cloudkit.png";
import xcode from "../assets/img/Xcode.png";
import terminal from "../assets/img/terminal.png";
import github from "../assets/img/github.png";
import vapor from "../assets/img/vapor.png";
import cpp from "../assets/img/cpp.png";
import nodejs from "../assets/img/nodejs.png";

const Skills = () => {
  return (
    <div className="flex flex-col w-full items-center bg-gray-100 py-8 my-16">
      <div className="flex flex-col w-3/4 items-start justify-start">
        <Reveal>
          <div className="flex flex-col">
            <p className=" text-5xl font-bold">Skills</p>
          </div>
        </Reveal>
      </div>

      <div className="flex w-3/4 justify-evenly py-8">
        <SkillCard image={swift} title="Swift" message="this is Swift" />
        <SkillCard
          image={swiftui}
          title="SwiftUI"
          message="this is swiftui"
          delay={0.2}
        />
        <SkillCard
          image={swiftdata}
          title="SwiftData"
          message="this is swiftdata"
          delay={0.3}
        />
        <SkillCard
          image={xcode}
          title="XCode"
          message="this is xcode"
          scale="scale-125"
          delay={0.4}
        />
        <SkillCard
          image={cloudkit}
          title="CloudKit"
          message="this is cloudkit"
          delay={0.5}
        />
      </div>
      <div className="flex w-3/4 justify-evenly py-8">
        <SkillCard image={terminal} title="Terminal" message="this is Swift" />
        <SkillCard
          image={github}
          title="GitHub"
          message="this is swiftui"
          delay={0.2}
        />
        <SkillCard
          image={vapor}
          title="Vapor"
          message="this is swiftdata"
          delay={0.3}
        />
        <SkillCard
          image={cpp}
          title="C++"
          message="this is xcode"
          delay={0.4}
        />
        <SkillCard
          image={nodejs}
          title="NodeJS"
          message="this is cloudkit"
          delay={0.5}
        />
      </div>
    </div>
  );
};

export default Skills;
