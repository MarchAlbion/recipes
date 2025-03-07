import { motion } from "framer-motion";

export const Spinner = () => {
  return (
    <motion.div
      initial={{
        x: "-20vw",
        opacity: 0,
        rotate: -30,
        scale: 0.5,
      }}
      animate={{
        x: 0, //
        opacity: 1,
        rotate: 0,
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 1.5,
      }}
      className="flex items-center justify-center self-center m-auto"
    >
      <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </motion.div>
  );
};
