import { motion } from "framer-motion";

const InitialScreen = () => {
  return (
    <motion.div
      animate={{
        y: [0, 0, 0, -window.innerHeight, -1.5 * window.innerHeight],
        opacity: [1, 1, 1, 1, 0],
      }}
      transition={{ duration: 5, ease: "easeIn" }}
      className="text-5xl md:text-8xl 4k:text-9xl fixed h-screen w-full bg-leveled-700 z-50 flex flex-col justify-center items-center text-white neon-shadow"
    >
      <p className="font-extrabold tracking-widest mb-10">
        Welcome to my portfolio
      </p>
      {/* Bounce effect */}
      <span className="font-bold tracking-wider animate-bounce">{` ( > ᴗ < ) `}</span>
    </motion.div>
  );
};

export default InitialScreen;
