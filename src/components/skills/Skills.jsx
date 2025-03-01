import { skills } from "../../utils/data/personalData";
import Title from "../layouts/Title";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-16 px-4 bg-gradient-to-br from-gray-900 to-black border-b border-gray-800"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-32 h-32 bg-pink-500/20 rounded-full absolute top-10 left-1/2 transform -translate-x-1/2 blur-3xl opacity-30" />
        <div className="w-48 h-48 bg-purple-500/20 rounded-full absolute bottom-10 right-1/4 blur-3xl opacity-30" />
      </div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex justify-center items-center text-center mb-12"
      >
        <Title title="My Skills" des="What I Excel At" />
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8"
      >
        {skills.map((skill, id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            className="flex flex-col items-center justify-center rounded-xl"
          >
            <div className="w-full max-w-[150px] aspect-square bg-gray-800/40 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center gap-3">
              {/* Skill Icon */}
              <img
                src={skill.image}
                alt={skill.name}
                className="h-8 sm:h-10 w-auto object-contain rounded"
              />
              <p className="text-white text-sm sm:text-base font-medium text-center">
                {skill.name}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;