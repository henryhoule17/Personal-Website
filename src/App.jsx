import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, HeroOne, HeroTwo, Navbar, Tech, Works, StarsCanvas } from "./components"

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-tertiary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <HeroOne />
        </div>
          <HeroTwo />
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
