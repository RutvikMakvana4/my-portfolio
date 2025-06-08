import { useState, useEffect } from "react";
import Title from "../layouts/Title";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";
import BackToTop from "../BackToTop";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from Dev.to API with caching
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Check if blogs are cached
        const cachedBlogs = localStorage.getItem("cachedBlogs");
        if (cachedBlogs) {
          const parsedBlogs = JSON.parse(cachedBlogs);
          console.log("Cached blogs:", parsedBlogs); // Log cached blogs
          setBlogs(parsedBlogs);
          setLoading(false);
          return;
        }

        const response = await fetch("https://dev.to/api/articles?username=rutvikmakvana4");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs from Dev.to");
        }
        const data = await response.json();
        console.log("Fetched blogs:", data); // Log fetched blogs
        setBlogs(data);
        localStorage.setItem("cachedBlogs", JSON.stringify(data)); // Cache the response
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
      <section className="relative w-full min-h-screen py-20 px-4 bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] flex items-center justify-center">
        <ClipLoader color="#ec4899" size={50} />
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative w-full min-h-screen py-20 px-4 bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] flex items-center justify-center">
        <p className="text-orange-400 text-lg">Error: {error}</p>
      </section>
    );
  }

  // Filter out invalid blog entries
  const validBlogs = blogs.filter(
    (blog) => blog && typeof blog === "object" && blog.id && blog.title
  );

  return (
    <section className="relative w-full min-h-screen py-20 px-4 bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-32 h-32 bg-pink-500/20 rounded-full absolute top-20 left-1/2 transform -translate-x-1/2 blur-3xl opacity-20" />
        <div className="w-48 h-48 bg-purple-500/20 rounded-full absolute bottom-20 right-1/4 blur-3xl opacity-20" />
      </div>

      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center mb-16"
      >
        <Title title="Blog Posts" des="My Thoughts & Insights" />
        <p className="text-[17px] sm:text-lg text-gray-600 dark:text-gray-200 leading-loose max-w-2xl mt-4">
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
        {validBlogs.length > 0 ? (
          validBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-200 text-center col-span-2">
            No blog posts available at the moment.
          </p>
        )}
      </motion.div>
      <BackToTop />
    </section>
  );
};

export default Blogs;