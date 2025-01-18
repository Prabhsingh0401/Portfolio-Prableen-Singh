import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import Socials from './components/socials/socials'
import About from './components/AboutSection/AboutSection'
import Work from './components/Work/Work'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <Socials></Socials>
    <About></About>
    <Work></Work>
    <Projects></Projects>
    <Footer></Footer>
    </>
  )
}

export default App
