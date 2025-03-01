import profileImg from "/profile.svg";
import { motion } from "framer-motion";

const RightBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full lg:w-1/2 flex justify-center items-center px-4"
    >
      <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-full overflow-hidden group shadow-lg">
        <img
          className="absolute bottom-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          src={profileImg}
          alt="Rutvik Makvana"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default RightBanner;