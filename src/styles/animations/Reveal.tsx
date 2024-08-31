import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delayTime?: number;
}

export const Reveal = ({ children, delayTime }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("showing");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={" relative overflow-visible"}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, filter: "blur(0px)" },
          showing: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: delayTime != 0.2 ? delayTime : 0.2,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
