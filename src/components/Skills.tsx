import { Reveal } from "../styles/animations/Reveal";
import SkillCard from "../components/SkillCard";

// Icons
// const swift = require("../assets/img/swift-15.svg");
// const swiftui = require("../assets/img/swiftui-96x96_2x.png");
// const swiftdata = require("../assets/img/swiftdata-96x96_2x.png");
// const cloudkit = require("../assets/img/cloudkit.png");
// const xcode = require("../assets/img/Xcode.png");
// const terminal = require("../assets/img/terminal.png");
// const github = require("../assets/img/github.png");
// const vapor = require("../assets/img/vapor.png");
// const cpp = require("../assets/img/cpp.png");
// const nodejs = require("../assets/img/nodejs.png");

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
        <SkillCard image={"/swift-15.svg"} title="Swift" />
        <SkillCard
          image={"/swiftui-96x96_2x.png"}
          title="SwiftUI"
          delay={0.2}
        />
        <SkillCard
          image={"/swiftdata-96x96_2x.png"}
          title="SwiftData"
          delay={0.3}
        />
        <SkillCard
          image={"/Xcode.png"}
          title="Xcode"
          scale="scale-125"
          delay={0.4}
        />
        <SkillCard image={"/cloudkit.png"} title="CloudKit" delay={0.5} />
      </div>
      <div className="flex w-3/4 justify-evenly py-8">
        <SkillCard image={"/terminal.png"} title="Terminal" />
        <SkillCard image={"/github.png"} title="GitHub" delay={0.2} />
        <SkillCard image={"/vapor.png"} title="Vapor" delay={0.3} />
        <SkillCard image={"/cpp.png"} title="C++" delay={0.4} />
        <SkillCard image={"/nodejs.png"} title="NodeJS" delay={0.5} />
      </div>
    </div>
  );
};

export default Skills;
