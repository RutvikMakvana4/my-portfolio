import Title from "../layouts/Title";
import { experiences } from "../../utils/data/personalData";
import { motion } from "framer-motion";
import BackToTop from "../BackToTop";
import { FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa";

// Map icon names to components
const iconMap = {
  FaBriefcase: FaBriefcase,
  FaCode: FaCode,
  FaLaptopCode: FaLaptopCode,
};

const Experience = () => {
  return (
    <section className="relative w-full min-h-screen py-20 px-4 bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] flex items-center justify-center">
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
          <Title title="Experience" des="My Journey" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Vertical Path (Timeline Line) */}
          <div className="absolute right-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-600" />

          {experiences.map((exp, index) => {
            const IconComponent = iconMap[exp.icon];
            return (
              <div
                key={exp.id}
                className="relative flex flex-col sm:flex-row sm:items-center mb-12"
              >
                {/* Experience Card */}
                <div className="w-full sm:w-1/2 px-4 sm:text-right">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-md rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row ${
                      index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    } items-center gap-4 shadow-lg`}
                  >
                    {IconComponent && (
                      <IconComponent className="w-16 h-16 sm:w-20 sm:h-20 text-pink-400" />
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                      <p className="text-gray-500 dark:text-gray-300 text-sm">{exp.company}</p>
                      <p className="text-gray-500 dark:text-gray-300 text-sm">{exp.duration}</p>
                      <p className="text-gray-600 dark:text-gray-200 mt-2">{exp.description}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Marker on the Path */}
                <div className="absolute right-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-4 h-4 bg-pink-400 rounded-full border-4 border-gray-100 dark:border-gray-900" />

                {/* Empty Space on the Other Side (Hidden on Mobile) */}
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            );
          })}
        </motion.div>
      </div>
      <BackToTop />
    </section>
  );
};

export default Experience;