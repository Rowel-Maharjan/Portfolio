import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Tech from "./sections/Tech"
import Project from "./sections/Project"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import StarCanvas from "./components/StarCanvas"

import { useInView } from 'react-intersection-observer'; // Import the hook
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';


function App() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 }); // Detect when the section is in view

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Project />
        <div ref={ref} className="relative z-0">
          <Contact />
          {/* {inView && (
            <StarCanvas />
          )} */}
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </main>
    </>
  )
}

export default App
