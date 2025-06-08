import Title from "../layouts/Title";
import { projects } from "../../utils/data/personalData";
import { motion } from "framer-motion";
import BackToTop from "../BackToTop";

const Projects = () => {
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
          <Title title="Projects" des="What I've Built" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-md rounded-lg p-4 flex flex-col gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={`Screenshot of ${project.title} project`}
                className="w-full h-40 object-cover rounded-lg"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs text-gray-600 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-700/50 rounded-full px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 rounded"
              >
                View Project
              </a>
            </div>
          ))}
        </motion.div>
      </div>
      <BackToTop />
    </section>
  );
};

export default Projects;