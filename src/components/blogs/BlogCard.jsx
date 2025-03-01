import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  // Map Dev.to API fields to the blog card structure
  const blogData = {
    title: blog.title,
    date: new Date(blog.published_at).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    url: blog.url,
  };

  return (
    <a
      href={blogData.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700/50 flex flex-col overflow-hidden"
      >
        {/* Blog Image */}
        <div className="w-full h-40 sm:h-48 bg-gray-700 rounded-t-xl flex items-center justify-center">
          <span className="text-gray-400 text-sm">Image Placeholder</span>
        </div>

        {/* Blog Details */}
        <div className="p-4 sm:p-6 flex flex-col gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-white">
            {blogData.title}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-400">{blogData.date}</p>
            <FaArrowRight className="text-gray-400 text-sm" />
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default BlogCard;