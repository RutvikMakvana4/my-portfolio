import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Title from "../layouts/Title";

const CodeClash = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="codeclash"
      className="w-full py-16 px-4 bg-gradient-to-br from-gray-900 to-black border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center mb-12"
        >
          <Title title="CodeClash" des="Daily Coding Challenge" />
          <p className="text-gray-400 mt-4 max-w-2xl">
            Test your skills against other developers in our daily coding battle!
            New challenges every 24 hours with prizes for top performers.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Challenge?</h3>
              <p className="text-gray-400 mb-6">
                Complete today's coding quiz to earn your spot on the leaderboard.
              </p>

              <motion.button
                onClick={() => navigate("/code-clash/quiz")}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full h-14 rounded-lg text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg overflow-hidden"
              >
                <span className="relative z-10">Start Today's Challenge</span>
                {isHovered && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 2 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-white/10 rounded-full"
                  />
                )}
              </motion.button>

              <div className="mt-6 flex items-center text-sm text-gray-400">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Today's Prize: Twitter Shoutout + Featured on Leaderboard
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Fast-Paced Challenges</h4>
                <p className="text-gray-400 mt-1">5-minute timed quizzes with 3 coding questions each day.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Daily Leaderboard</h4>
                <p className="text-gray-400 mt-1">Compete with developers worldwide and track your progress.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">24-Hour Challenges</h4>
                <p className="text-gray-400 mt-1">New questions every day at midnight UTC.</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/code-clash/leaderboard")}
              className="mt-6 w-full md:w-auto px-6 py-3 rounded-lg font-medium text-white bg-gray-700 hover:bg-gray-600 transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              View Leaderboard
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeClash;