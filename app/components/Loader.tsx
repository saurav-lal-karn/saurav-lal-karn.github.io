// Loader.tsx
import { motion } from "framer-motion";

export default function Loader() {
  const text = "Saurav Lal Karn";

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    // visible: (i: number) => ({
    //   opacity: 1,
    //   y: 0,
    //   transition: {
    //     delay: i * 0.1,
    //     type: "spring",
    //     stiffness: 100,
    //   },
    // }),
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.div
        className="text-white text-4xl font-bold flex gap-1"
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((char, i) => (
          <motion.span key={i} custom={i} animate={["visible", "pulse"]}>
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
