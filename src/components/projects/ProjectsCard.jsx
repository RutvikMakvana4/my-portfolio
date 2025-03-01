import { FaApple, FaGooglePlay, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectsCard = ({
  title,
  des,
  src,
  appStoreLink,
  playStoreLink,
  websiteLink,
}) => {
  return (
    <div className="relative mx-4">
      <motion.div
        className="bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700/50 p-4 sm:p-6 flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image */}
        <div className="w-full h-48 sm:h-64 overflow-hidden rounded-lg relative">
          <img
            className="w-full h-full object-cover"
            src={src}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
        </div>

        {/* Text and Links */}
        <div className="flex flex-col gap-3 text-center">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-semibold text-white uppercase">
              {title}
            </h3>
            <div className="flex gap-2">
              {websiteLink && (
                <motion.a
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/70 backdrop-blur-sm text-gray-300 hover:text-pink-400 transition-all duration-300"
                >
                  <FaGlobe size={18} />
                </motion.a>
              )}
              {appStoreLink && (
                <motion.a
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/70 backdrop-blur-sm text-gray-300 hover:text-pink-400 transition-all duration-300"
                >
                  <FaApple size={18} />
                </motion.a>
              )}
              {playStoreLink && (
                <motion.a
                  href={playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900/70 backdrop-blur-sm text-gray-300 hover:text-pink-400 transition-all duration-300"
                >
                  <FaGooglePlay size={18} />
                </motion.a>
              )}
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-300">{des}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsCard;