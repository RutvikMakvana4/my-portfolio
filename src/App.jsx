import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Blogs from "./components/blogs/Blog";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const MainPage = () => (
  <>
    <Banner />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
  </>
);

export default App;