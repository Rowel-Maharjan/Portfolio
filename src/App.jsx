import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Tech from "./sections/Tech"
import Project from "./sections/Project"


function App() {

  return (
    <>
      <main className='max-w-7xl mx-auto'>
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Project />
      </main>
    </>
  )
}

export default App
