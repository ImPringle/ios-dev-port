import { Reveal } from "../styles/animations/Reveal";

interface Props {
  image: string;
  title: string;
  scale?: string;
  delay?: number;
}

const SkillCard = ({ image, title, scale, delay }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-32 max-[580px]:mb-4">
      <Reveal delayTime={delay}>
        <img src={image} width={80} height={80} className={scale} />
      </Reveal>
      <Reveal delayTime={delay}>
        <p className="font-bold mt-2">{title}</p>
      </Reveal>
    </div>
  );
};

export default SkillCard;
