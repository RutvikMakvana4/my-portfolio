import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Blogs from "./components/blogs/Blog";
import CodeClash from './components/codeClash/CodeClash';
import CodeClashQuiz from "./components/codeClash/CodeClashQuiz";
import LeaderboardPage from "./components/codeClash/LeaderBoard";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/home" element={<Banner />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/code-clash" element={<CodeClash />} />
            <Route path="/code-clash/quiz" element={<CodeClashQuiz />} />
            <Route path="/code-clash/leaderboard" element={<LeaderboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;