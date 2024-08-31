import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const Blur = ({ children }: Props) => {
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
    <div ref={ref} className=" relative overflow-visible">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 0, filter: "blur(5px)", scale: 1.5 },
          showing: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.35, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
