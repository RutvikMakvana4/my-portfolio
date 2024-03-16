import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Navbar from './components/navbar/Navbar'


function App() {

  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText">
        <div className="max-w-screen-xl mx-auto px-16">
          <Navbar />
          <Banner />
          <Features />
        </div>
      </div>
    </>
  )
}

export default App
