import { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email Validation
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setErrMsg("");
    setSuccessMsg("");

    // Client-side validation
    if (name === "") {
      setErrMsg("Name is required!");
      return;
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
      return;
    } else if (email === "") {
      setErrMsg("Please provide your email!");
      return;
    } else if (!emailValidation(email)) {
      setErrMsg("Please provide a valid email!");
      return;
    } else if (message === "") {
      setErrMsg("Message is required!");
      return;
    }

    // Simulate form submission success (without EmailJS)
    setSuccessMsg(`Thank you, ${username}! Your message has been sent successfully!`);
    setName("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
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
        <Title title="Get in Touch" des="Contact Me" />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12"
      >
        <ContactLeft />
        <motion.div
          className="w-full lg:w-2/3 bg-gray-800/40 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-lg border border-gray-700/50"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form className="flex flex-col gap-6" onSubmit={handleSend}>
            {/* Error/Success Messages */}
            {errMsg && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-3 bg-gray-900/50 backdrop-blur-sm rounded-lg text-center text-orange-400 text-base tracking-wide shadow-lg"
              >
                {errMsg}
              </motion.p>
            )}
            {successMsg && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-3 bg-gray-900/50 backdrop-blur-sm rounded-lg text-center text-green-400 text-base tracking-wide shadow-lg"
              >
                {successMsg}
              </motion.p>
            )}

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className={`w-full p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg border ${errMsg === "Username is required!"
                      ? "border-orange-400 animate-shake"
                      : "border-gray-600"
                    } text-gray-200 focus:outline-none focus:border-pink-400 transition-all duration-300 placeholder-gray-500`}
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className={`w-full p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg border ${errMsg === "Phone number is required!"
                      ? "border-orange-400 animate-shake"
                      : "border-gray-600"
                    } text-gray-200 focus:outline-none focus:border-pink-400 transition-all duration-300 placeholder-gray-500`}
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 uppercase tracking-wide">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`w-full p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg border ${(errMsg === "Please provide your email!" ||
                    errMsg === "Please provide a valid email!")
                    ? "border-orange-400 animate-shake"
                    : "border-gray-600"
                  } text-gray-200 focus:outline-none focus:border-pink-400 transition-all duration-300 placeholder-gray-500`}
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 uppercase tracking-wide">
                Message
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={`w-full p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg border ${errMsg === "Message is required!"
                    ? "border-orange-400 animate-shake"
                    : "border-gray-600"
                  } text-gray-200 focus:outline-none focus:border-pink-400 transition-all duration-300 placeholder-gray-500 resize-none`}
                cols="30"
                rows="6"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full h-12 rounded-lg text-base text-white tracking-wider uppercase bg-pink-500 hover:bg-pink-600 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;