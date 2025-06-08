import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from "../../constants";
import { motion } from "framer-motion";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);

  const renderNavLinks = (mobile = false) =>
    navLinksdata.map(({ _id, title, link }) => (
      <li
        key={_id}
        className={
          mobile
            ? "text-lg font-medium text-white tracking-wide cursor-pointer transition-all duration-300"
            : "text-base font-medium text-gray-600 dark:text-gray-300 tracking-wide cursor-pointer transition-all duration-300"
        }
      >
        <RouterLink
          to={`/${link}`}
          onClick={() => mobile && toggleMenu()}
          className={
            location.pathname === `/${link}`
              ? "text-pink-400 border-b-2 border-pink-400 pb-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 rounded"
              : "hover:text-pink-400 hover:border-b-2 hover:border-pink-400 hover:pb-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 rounded"
          }
        >
          {title}
        </RouterLink>
      </li>
    ));

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-16 sticky top-0 z-50 bg-gray-100/90 dark:bg-gray-900/90 backdrop-blur-md flex justify-end items-center px-6 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="flex items-center gap-6">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {renderNavLinks()}
        </ul>
        <ThemeToggle />
        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-pink-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
        >
          {showMenu ? <MdClose size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        {showMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gradient-to-br from-gray-100/90 to-gray-200/90 dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-black/90 backdrop-blur-md p-8 z-60 flex flex-col justify-between md:hidden"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="text-pink-400 hover:text-pink-500 text-2xl"
              >
                <MdClose />
              </button>
            </div>

            {/* Menu Links */}
            <ul className="flex flex-col gap-8 items-center flex-1 justify-center">
              {renderNavLinks(true)}
            </ul>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-300">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="hover:text-pink-400 transition-all duration-300" size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="hover:text-pink-400 transition-all duration-300" size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="hover:text-pink-400 transition-all duration-300" size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;