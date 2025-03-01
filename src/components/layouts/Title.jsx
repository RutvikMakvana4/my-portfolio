import { motion } from "framer-motion";

const Title = ({ title, des }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-3 items-center text-center"
    >
      <h3 className="text-lg sm:text-xl font-medium text-gray-400 uppercase tracking-wider">
        {title}
      </h3>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 capitalize">
        {des}
      </h1>
    </motion.div>
  );
};

export default Title;