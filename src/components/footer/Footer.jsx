import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { socialMedia } from "../../utils/data/personalData";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-10 bg-gradient-to-br from-gray-900 to-black">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-32 h-32 bg-pink-500/20 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 blur-3xl opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Copyright Text */}
        <p className="text-center text-gray-400 text-base">
          © {currentYear}. All rights reserved by{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 font-semibold">
            Rutvik Makvana
          </span>
        </p>

        {/* Social Media Links */}
        <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase text-gray-400 font-medium tracking-wider text-center">
            Connect With Me
          </h2>
          <div className="flex justify-center gap-4">
            {socialMedia.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 flex items-center justify-center text-gray-300 bg-gray-900/50 backdrop-blur-sm rounded-full hover:text-pink-400 hover:bg-gray-800 transition-all duration-300"
              >
                {item.title === "github" && <FaGithub size={20} />}
                {item.title === "twitter" && <FaXTwitter size={20} />}
                {item.title === "linkedin" && <FaLinkedinIn size={20} />}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;