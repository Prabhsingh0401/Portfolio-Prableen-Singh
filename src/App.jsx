import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import Socials from './components/socials/socials'
import About from './components/AboutSection/AboutSection'
import Manifesto from './components/Manifesto/Manifesto'
import Work from './components/Work/Work'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Contact from './components/contactSection/contactSection'

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

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
        <section id="Manifesto">
          <Manifesto />
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
