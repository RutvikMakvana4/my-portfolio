import Banner from './components/banner/Banner'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Experience from "./components/experience/Experience";

function App() {

  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <Banner />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
