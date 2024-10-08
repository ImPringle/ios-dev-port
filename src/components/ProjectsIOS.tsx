import Carousel from "react-multi-carousel";
import ProyectCard from "./ProyectCard";

// const iphonetest = require("/iphonetest.png");

const ProjectsIOS = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="flex flex-col w-full items-center ">
      <div className="flex flex-col w-3/4 items-start justify-start ">
        <p className="text-3xl max-[464px]:text-xl font-bold mb-3">
          iOS. <span className="grayText"> take a look at my mobile apps.</span>
        </p>
        <Carousel
          responsive={responsive}
          containerClass={`w-full `}
          infinite={true}
        >
          <ProyectCard
            image={"/dailies-demo-p1.png"}
            title="DAILIES"
            desc="Keep an eye on your daily expenses with Dailies."
          />
          <ProyectCard
            image={"/iauto-demo-p2.png"}
            title="IAUTOMAT"
            desc="Play with simulations using Cellular Automata model."
          />
          <ProyectCard
            image={"/dailies-demo-p1.png"}
            title="DAILIES"
            desc="Keep an eye on your daily expenses with Dailies."
          />
          <ProyectCard
            image={"/iauto-demo-p2.png"}
            title="IAUTOMAT"
            desc="Play with simulations using Cellular Automata model."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectsIOS;
