import { motion } from "framer-motion";

const ScrollSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      viewport={{
        once: false, // 🔥 re-animate on scroll
        amount: 0.15, // 🔥 mobile-friendly trigger
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
