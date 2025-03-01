import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { contactImg } from "../../assets/index";
import { socialMedia } from "../../utils/data/personalData";
import { motion } from "framer-motion";

const ContactLeft = () => {
  return (
    <motion.div
      className="w-full lg:w-1/3 bg-gray-800/40 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-lg border border-gray-700/50 flex flex-col gap-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">
        <img
          className="w-full h-48 sm:h-64 object-cover rounded-lg"
          src={contactImg}
          alt="Rutvik Makvana"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
      </div>
      <div className="flex flex-col gap-4 text-center sm:text-left">
        <p className="text-base text-gray-400 leading-relaxed">
          💻 Passionate software developer dedicated to crafting impactful
          digital solutions. Let's collaborate and build something extraordinary!
        </p>
        <p className="text-base text-gray-400 flex items-center justify-center sm:justify-start gap-2">
          Phone: <span className="text-white">+91 6355423641</span>
        </p>
        <p className="text-base text-gray-400 flex items-center justify-center sm:justify-start gap-2">
          Email: <span className="text-white">rutvikmakvana432@gmail.com</span>
        </p>
      </div>
    </motion.div>
  );
};

export default ContactLeft;