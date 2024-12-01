import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Tech from "./sections/Tech"
import Project from "./sections/Project"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import StarCanvas from "./components/StarCanvas"


function App() {

  return (
    <>
      <main className='max-w-7xl mx-auto'>
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Project />
        <div className="relative z-0">
          <Contact />
          <StarCanvas />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
