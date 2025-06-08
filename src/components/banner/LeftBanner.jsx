import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { motion } from "framer-motion";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Developer"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 1500,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full lg:w-1/2 flex flex-col gap-8 px-4 text-center lg:text-left z-10"
    >
      <div className="flex flex-col gap-6">
        <h4 className="text-lg font-light tracking-wider text-gray-500 dark:text-gray-400 uppercase">
          Welcome to My Portfolio
        </h4>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
          Hi, I'm Rutvik Makvana
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white flex justify-center lg:justify-start items-center gap-2">
          a <span className="text-pink-400">{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ec4899" />
        </h2>
        <p className="text-[17px] sm:text-lg text-gray-600 dark:text-gray-200 leading-loose max-w-lg mx-auto lg:mx-0">
          I'm a passionate Software Developer dedicated to creating impactful and innovative digital solutions. I thrive on solving complex challenges, collaborating with teams, and delivering seamless user experiences. With a commitment to continuous growth, I focus on crafting efficient and effective applications that make a difference.
        </p>
        <blockquote className="relative p-6 bg-gray-100/40 dark:bg-gray-800/40 backdrop-blur-md rounded-lg shadow-lg text-center lg:text-left text-gray-600 dark:text-gray-200 max-w-md mx-auto lg:mx-0 transform hover:scale-105 transition-all duration-500">
          <span className="text-xl font-semibold text-pink-400">Mission:</span>
          <br />
          <span className="text-lg italic">"Evolve relentlessly."</span>
        </blockquote>
      </div>
      <Media />
    </motion.div>
  );
};

export default LeftBanner;