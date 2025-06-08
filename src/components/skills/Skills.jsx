import Title from "../layouts/Title";
import { skills } from "../../utils/data/personalData";
import { motion } from "framer-motion";
import BackToTop from "../BackToTop";

const Skills = () => {
  return (
    <section className="relative w-full min-h-screen py-20 px-4 bg-gradient-to-br from-gray-200 to-gray-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black flex items-center justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-32 h-32 bg-pink-500/20 rounded-full absolute top-20 left-1/2 transform -translate-x-1/2 blur-3xl opacity-20" />
        <div className="w-48 h-48 bg-purple-500/20 rounded-full absolute bottom-20 right-1/4 blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Title title="Skills" des="What I Can Do" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-md rounded-lg p-4 flex flex-col items-center gap-2"
            >
              <img
                src={skill.image}
                alt={`Icon for ${skill.name} skill`}
                className="w-12 h-12"
                loading="lazy"
              />
              <p className="text-gray-800 dark:text-white text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <BackToTop />
    </section>
  );
};

export default Skills;