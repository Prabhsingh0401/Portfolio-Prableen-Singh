import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import Socials from './components/socials/socials'
import About from './components/AboutSection/AboutSection'
import Work from './components/Work/Work'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Contact from './components/contactSection/contactSection'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section id="Hero">
          <HeroSection />
        </section>
        <section id="Socials">
          <Socials />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Work">
          <Work />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
