import { BsPersonWorkspace } from "react-icons/bs";
import { experiences } from "../../utils/data/personalData";
import GlowCard from "../layouts/Glowcard";
import Title from "../layouts/Title";
import { motion } from "framer-motion";

const currentRole = experiences[0];
const pastExperiences = experiences.slice(1);

const Experience = () => {
  return (
    <section
      id="experience"
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
        <Title title="My Journey" des="Work Experience" />
      </motion.div>

      {/* Experience Section */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Current Role Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <GlowCard identifier="current-role">
            <div className="p-4 sm:p-6 bg-gray-800/40 backdrop-blur-md rounded-xl shadow-lg border border-pink-500/50">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="text-pink-400"
                >
                  <BsPersonWorkspace size={40} />
                </motion.div>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-pink-400 uppercase tracking-wide">
                    Currently Working Here
                  </p>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mt-1">
                    {currentRole.title}
                  </h3>
                  <p className="text-base text-gray-300 mt-1">
                    {currentRole.company}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    {currentRole.duration}
                  </p>
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        {/* Past Experiences Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500/50 to-purple-500/50" />

          {pastExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative w-full max-w-md my-6"
            >
              {/* Timeline Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-2 border-gray-900" />

              <GlowCard identifier={`experience-${experience.id}`}>
                <div className="p-4 bg-gray-800/40 backdrop-blur-md rounded-xl shadow-lg flex items-center gap-4 hover:bg-gray-800/60 transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="text-purple-400"
                  >
                    <BsPersonWorkspace size={32} />
                  </motion.div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-white uppercase">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-gray-300">{experience.company}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {experience.duration}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;