import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from "../../constants";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleNavLinkClick = (link, mobile = false) => {
    if (link === "blogs") {
      if (mobile) toggleMenu();
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(link);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", offset: -70 });
        }
      }, 100);
    } else {
      const element = document.getElementById(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", offset: -70 });
      }
    }

    if (mobile) toggleMenu();
  };

  const renderNavLinks = (mobile = false) =>
    navLinksdata.map(({ _id, title, link }) => (
      <li
        key={_id}
        className={
          mobile
            ? "text-lg font-medium text-white tracking-wide cursor-pointer transition-all duration-300"
            : "text-base font-medium text-gray-300 tracking-wide cursor-pointer transition-all duration-300"
        }
      >
        {link === "blogs" ? (
          <RouterLink
            to="/blogs"
            onClick={() => handleNavLinkClick(link, mobile)}
            className={mobile ? "hover:text-pink-400" : "hover:text-pink-400"}
          >
            {title}
          </RouterLink>
        ) : (
          <button
            onClick={() => handleNavLinkClick(link, mobile)}
            className={mobile ? "hover:text-pink-400" : "hover:text-pink-400"}
          >
            {title}
          </button>
        )}
      </li>
    ));

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-16 sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md flex justify-end items-center px-6 border-b border-gray-800"
    >
      <div className="flex items-center gap-6">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {renderNavLinks()}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-pink-400 hover:bg-gray-800 transition-all duration-300"
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
            className="fixed inset-0 bg-gray-900 p-8 z-50 flex flex-col justify-between md:hidden"
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
            <div className="flex justify-center gap-6 text-gray-300">
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