import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Tech from "./sections/Tech"
import Project from "./sections/Project"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import StarCanvas from "./components/StarCanvas"

import { useInView } from 'react-intersection-observer'; // Import the hook


function App() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 }); // Detect when the section is in view

  return (
    <>
      <main className='max-w-7xl mx-auto'>
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Project />
        <div ref={ref} className="relative z-0">
          <Contact />
          {inView && (
            <StarCanvas />
          )}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
