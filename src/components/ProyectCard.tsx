// import { useState } from "react";

interface Props {
  image: string;
  title: string;
  desc: string;
  mac?: boolean;
}

const ProyectCard = ({ image, mac, title, desc }: Props) => {
  // const [active, setActive] = useState(false);

  // const handleSize = () => {
  //   if (active == false) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // };

  return (
    <div
      className={
        "flex flex-col items-center justify-between bg-gray-900 rounded-2xl px-5 pt-5 mx-2" +
        (mac ? " h-[400px] pb-5" : " h-[500px]")
      }
    >
      <div>
        <p className="grayText ">{title}</p>
        <p className="text-white font-bold text-xl">{desc}</p>
      </div>
      <img src={image} width={"90%"} className={mac ? "" : "pt-6"} />
    </div>
  );
};

export default ProyectCard;
