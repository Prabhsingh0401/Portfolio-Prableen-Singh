import './App.scss'
import { Route , Routes }  from 'react-router-dom'
import Layout from './Components/Layouts'
import Home from './Components/Home'
import About from './Components/About/Index';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Project from './Components/Projects'
import { useEffect } from 'react';
import DOTS from "vanta/src/vanta.dots"

function App() {

  useEffect(() =>{
    DOTS({
      el: '#vanta'
    })
  },[])

  return (
      <>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='about' index element={<About/>}></Route>
          <Route path='contact' index element={<Contact/>}></Route>
          <Route path='gallery' index element={<Gallery/>}></Route>
          <Route path='project' index element={<Project/>}></Route>
        </Route>
      </Routes>
      <div className='app'>
        <div className='bg' id='vanta'></div>
      </div>
      </>
  );
}

export default App;
