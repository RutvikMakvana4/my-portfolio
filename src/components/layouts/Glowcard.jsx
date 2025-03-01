import { motion } from "framer-motion";

const GlowCard = ({ children, identifier }) => {
  return (
    <motion.div
      key={identifier}
      className="relative transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Card Content */}
      <div className="relative bg-gray-800/40 backdrop-blur-md rounded-xl shadow-lg border border-gray-700/50 group-hover:border-pink-500/50 transition-all duration-300">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;