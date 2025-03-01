import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { socialMedia } from "../../utils/data/personalData";

const Media = () => {
  return (
    <div className="flex flex-col gap-6 items-center lg:items-start">
      <h2 className="text-base uppercase text-gray-400 font-medium tracking-wider">
        Connect With Me
      </h2>
      <div className="flex gap-4 items-center">
        {socialMedia.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center text-gray-300 bg-gray-800/50 backdrop-blur-sm rounded-full hover:text-pink-400 hover:bg-gray-700 transition-all duration-300"
          >
            {item.title === "github" && <FaGithub size={20} />}
            {item.title === "twitter" && <FaXTwitter size={20} />}
            {item.title === "linkedin" && <FaLinkedinIn size={20} />}
          </motion.a>
        ))}
        <motion.a
          href="/Rutvik-Makvana-Resume.pdf"
          download
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-2 bg-pink-400 text-white font-semibold rounded-full hover:bg-pink-500 transition-all duration-300"
        >
          Resume
        </motion.a>
      </div>
    </div>
  );
};

export default Media;