import { useState, useEffect } from "react";
import Title from "../layouts/Title";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from Dev.to API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?username=rutvikmakvana4");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs from Dev.to");
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="relative w-full min-h-screen py-16 px-4 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <p className="text-gray-400 text-lg">Loading blogs...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative w-full min-h-screen py-16 px-4 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <p className="text-orange-400 text-lg">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-screen py-16 px-4 bg-gradient-to-br from-gray-900 to-black">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-32 h-32 bg-pink-500/20 rounded-full absolute top-10 left-1/2 transform -translate-x-1/2 blur-3xl opacity-30" />
        <div className="w-48 h-48 bg-purple-500/20 rounded-full absolute bottom-10 right-1/4 blur-3xl opacity-30" />
      </div>

      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center mb-12"
      >
        <Title title="Blog Posts" des="My Thoughts & Insights" />
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mt-4">
          Check out my latest blog posts where I share insights, tips, and experiences. Feel free to drop by, read, and leave your thoughts!
        </p>
      </motion.div>

      {/* Blog List */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </motion.div>
    </section>
  );
};

export default Blogs;