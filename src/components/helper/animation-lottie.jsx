"use client";

import Lottie from "lottie-react";
import { motion } from "framer-motion";

const AnimationLottie = ({ animationPath, width = "95%", className = "" }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative bg-gray-800/40 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-700/50 ${className}`}
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />

      {/* Lottie Animation */}
      <div className="relative z-10">
        <Lottie {...defaultOptions} />
      </div>
    </motion.div>
  );
};

export default AnimationLottie;