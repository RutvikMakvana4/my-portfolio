import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CodeClashQuiz = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [leaderboard, setLeaderboard] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "What is the output of 3 + '3' in JavaScript?",
      options: ["6", "33", "TypeError", "undefined"],
      correctAnswer: "33",
      explanation: "JavaScript performs type coercion..."
    },
    {
      question: "Which React hook is used for side effects?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: "useEffect",
      explanation: "useEffect hook lets you perform side effects..."
    },
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets", "Colorful Style Syntax"],
      correctAnswer: "Cascading Style Sheets",
      explanation: "CSS stands for Cascading Style Sheets..."
    }
  ];

  useEffect(() => {
    const mockLeaderboard = [
      { rank: 1, name: "CodeMaster", score: 95, isYou: false },
      { rank: 2, name: "ReactWizard", score: 90, isYou: false },
      { rank: 3, name: "You", score: 85, isYou: true },
      { rank: 4, name: "NodeNinja", score: 80, isYou: false },
      { rank: 5, name: "CSSSamurai", score: 75, isYou: false },
    ];
    setLeaderboard(mockLeaderboard);
    setUserRank(3);
  }, []);

  useEffect(() => {
    if (!quizStarted || timeLeft <= 0) return;
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, quizStarted]);

  const handleStartQuiz = () => {
    if (!email.trim()) {
      setEmailError("Please enter your email to start the quiz.");
      return;
    }
    setEmailError("");
    setQuizStarted(true);
  };

  const handleAnswerSelect = (answer) => setSelectedAnswer(answer);

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      const updatedLeaderboard = [...leaderboard];
      const userEntry = updatedLeaderboard.find(entry => entry.isYou);
      if (userEntry) userEntry.score += 10;
      setLeaderboard(updatedLeaderboard.sort((a, b) => b.score - a.score));
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="w-full min-h-screen py-16 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
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

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {!quizStarted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 shadow-xl"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Enter the CodeClash Arena</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-400 uppercase mb-2">Your Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="Enter your email to compete"
                    />
                    {emailError && (
                      <p className="text-sm text-red-500 mt-1">{emailError}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      We'll use this to track your progress on the leaderboard
                    </p>
                  </div>

                  {/* Challenge Details */}
                  <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700/50">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Today's Challenge Details</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                        {questions.length} questions with multiple choice answers
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formatTime(timeLeft)} time limit
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        10 points per correct answer
                      </li>
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleStartQuiz}
                    className={`w-full py-4 rounded-lg font-medium text-white ${!email ? 'bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'} transition flex items-center justify-center gap-2`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Begin Challenge
                  </motion.button>
                </div>
              </motion.div>
            ) : !quizCompleted ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 shadow-xl"
              >
                {/* Quiz Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-blue-400 font-medium">
                    Question {currentQuestion + 1}/{questions.length}
                  </div>
                  <div className={`font-medium ${timeLeft < 60 ? 'text-red-400' : 'text-yellow-400'}`}>
                    <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formatTime(timeLeft)}
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-xl text-white mb-6">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => handleAnswerSelect(option)}
                      className={`p-4 rounded-lg cursor-pointer transition ${selectedAnswer === option
                        ? 'bg-blue-600/50 border border-blue-400'
                        : 'bg-gray-700/50 hover:bg-gray-700 border border-gray-600'
                        }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${selectedAnswer === option ? 'bg-blue-400' : 'bg-gray-600'}`}>
                          {selectedAnswer === option && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span>{option}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Next Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNextQuestion}
                  disabled={!selectedAnswer}
                  className={`w-full py-3 rounded-lg font-medium ${!selectedAnswer
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                    } transition flex items-center justify-center gap-2`}
                >
                  {currentQuestion === questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 shadow-xl text-center"
              >
                <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 p-6 rounded-lg mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Challenge Complete!</h2>
                  <p className="text-gray-300">Your results have been recorded</p>
                </div>
                
                <div className="mb-8">
                  <div className="text-5xl font-bold text-blue-400 mb-2">{score}/{questions.length}</div>
                  <p className="text-gray-400">Correct Answers</p>
                  
                  <div className="mt-6 bg-gray-900/30 rounded-lg p-4 max-w-md mx-auto">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Your Score</span>
                      <span>{score * 10} points</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Your Rank</span>
                      <span className="text-yellow-400">Top 5%</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Next Challenge</span>
                      <span>In 4h 22m</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/code-clash/leaderboard")}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    View Leaderboard
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/code-clash")}
                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                    Back to CodeClash
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeClashQuiz;
