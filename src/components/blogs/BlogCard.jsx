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
    image: blog.cover_image,
    tags: Array.isArray(blog.tags) ? blog.tags : [], // Ensure tags is an array
  };

  // Log the blog object to inspect the tags field
  console.log("Blog object:", blog);

  return (
    <a
      href={blogData.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block focus:outline-none focus:ring-2 focus:ring-designColor focus:ring-opacity-50 rounded-xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
        className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex flex-col overflow-hidden"
      >
        {/* Blog Image or Custom Thumbnail */}
        <div className="w-full h-40 sm:h-48 rounded-t-xl overflow-hidden">
          {blogData.image ? (
            <img
              className="w-full h-full object-cover"
              src={blogData.image}
              alt={blogData.title}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center p-4">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white text-center leading-tight">
                {blogData.title}
              </h4>
            </div>
          )}
        </div>

        {/* Blog Details */}
        <div className="p-4 sm:p-6 flex flex-col gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
            {blogData.title}
          </h3>
          {blogData.tags && blogData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {blogData.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs text-gray-600 dark:text-gray-300 bg-gray-200/50 dark:bg-gray-700/50 rounded-full px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500 dark:text-gray-300">{blogData.date}</p>
            <FaArrowRight className="text-gray-500 dark:text-gray-400 text-sm" />
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default BlogCard;