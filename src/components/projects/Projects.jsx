import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projects } from "../../utils/data/personalData";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-gray-900/50 backdrop-blur-md text-pink-400 hover:bg-gray-800/80 transition-all duration-300"
  >
    <FaChevronRight size={24} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-gray-900/50 backdrop-blur-md text-pink-400 hover:bg-gray-800/80 transition-all duration-300"
  >
    <FaChevronLeft size={24} />
  </button>
);

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="mt-6">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-500/50 hover:bg-pink-400 transition-all duration-300 cursor-pointer" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
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
        <Title title="Explore My Work" des="My Projects" />
      </motion.div>

      {/* Projects Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.name}
              des={project.description}
              src={project.image}
              appStoreLink={project.appStoreLink}
              playStoreLink={project.playStoreLink}
              websiteLink={project.websiteLink}
            />
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default Projects;