import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Title from "../layouts/Title";

const LeaderboardPage = () => {
  const navigate = useNavigate();
  
  // Mock data - replace with your backend data
  const leaderboard = [
    { rank: 1, name: "CodeMaster", score: 95, isYou: false },
    { rank: 2, name: "ReactWizard", score: 90, isYou: false },
    { rank: 3, name: "You", score: 85, isYou: true },
    { rank: 4, name: "NodeNinja", score: 80, isYou: false },
    { rank: 5, name: "CSSSamurai", score: 75, isYou: false },
    { rank: 6, name: "TypeScriptKing", score: 70, isYou: false },
    { rank: 7, name: "UIGuru", score: 65, isYou: false },
    { rank: 8, name: "BackendBoss", score: 60, isYou: false },
    { rank: 9, name: "FullStackHero", score: 55, isYou: false },
    { rank: 10, name: "DevNewbie", score: 50, isYou: false },
  ];

  return (
    <section className="w-full min-h-screen py-16 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <button 
          onClick={() => navigate("/code-clash")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to CodeClash
        </button>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center mb-12"
        >
          <Title title="CodeClash Leaderboard" des="Top Coders of the Day" />
          <p className="text-gray-400 mt-4 max-w-2xl">
            Daily rankings reset at midnight UTC. Can you make it to the top?
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700/50 shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 p-4 border-b border-gray-700/50">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Today's Top Coders
                </h3>
                <div className="text-xs bg-gray-900/50 px-2 py-1 rounded text-gray-400">
                  Resets in: 4h 22m
                </div>
              </div>
            </div>

            {/* Leaderboard List */}
            <div className="divide-y divide-gray-700/50">
              {leaderboard.map((entry) => (
                <motion.div 
                  key={entry.rank}
                  whileHover={{ scale: 1.01 }}
                  className={`flex items-center px-4 py-3 ${entry.isYou ? "bg-blue-900/20" : "hover:bg-gray-700/20"}`}
                >
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 ${
                    entry.rank === 1 ? "bg-yellow-400/90 text-gray-900" :
                    entry.rank === 2 ? "bg-gray-300/80 text-gray-900" :
                    entry.rank === 3 ? "bg-amber-600/80 text-white" :
                    "bg-gray-700 text-gray-400"
                  }`}>
                    {entry.rank}
                  </div>
                  <div className="flex-1 truncate">
                    <p className={`font-medium truncate ${entry.isYou ? "text-blue-400" : "text-gray-300"}`}>
                      {entry.name}
                    </p>
                  </div>
                  <div className="text-gray-400">
                    {entry.score}
                    <span className="text-xs ml-1">pts</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-gray-900/30 p-3 border-t border-gray-700/50 text-center">
              <p className="text-xs text-gray-400">
                Play today's quiz to join the leaderboard!
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700/50 p-6">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Your Rank</h4>
              <p className="text-3xl font-bold text-blue-400">#3</p>
              <p className="text-xs text-gray-500 mt-1">Top 5% of players</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700/50 p-6">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Your Score</h4>
              <p className="text-3xl font-bold text-purple-400">85</p>
              <p className="text-xs text-gray-500 mt-1">Today's points</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700/50 p-6">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Next Reward</h4>
              <p className="text-3xl font-bold text-green-400">🏆</p>
              <p className="text-xs text-gray-500 mt-1">Top 3 get shoutouts</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/code-clash/quiz")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white font-medium transition shadow-lg flex items-center justify-center gap-2 mx-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Join Today's Challenge
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardPage;