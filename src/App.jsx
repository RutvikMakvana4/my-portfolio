import Banner from './components/banner/Banner'
import Contact from './components/contact/Contact'
import Features from './components/features/Features'
import Navbar from './components/navbar/Navbar'


function App() {

  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <Banner />
          <Features />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
