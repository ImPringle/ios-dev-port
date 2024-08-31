import { useState } from "react";

interface Props {
  image: string;
  mac?: boolean;
}

const ProyectCard = ({ image, mac }: Props) => {
  const [active, setActive] = useState(false);

  const handleSize = () => {
    if (active == false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div
      className={
        "flex flex-col items-center justify-between bg-gray-900 rounded-2xl px-5 pt-5 mx-2" +
        (mac ? " h-[400px] pb-5" : " h-[500px]")
      }
    >
      <div>
        <p className="grayText ">IAUTOMAT</p>
        <p className="text-white font-bold text-xl">
          Play with simulations using Cellular Automata model.
        </p>
      </div>
      <img src={image} width={"90%"} />
    </div>
  );
};

export default ProyectCard;
