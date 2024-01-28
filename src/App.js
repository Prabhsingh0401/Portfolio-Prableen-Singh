import './App.scss'
import { Route , Routes }  from 'react-router-dom'
import Layout from './Components/Layouts'
import Home from './Components/Home'
import About from './Components/About/Index';
import Contact from './Components/Contact';

function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='about' index element={<About/>}></Route>
          <Route path='contact' index element={<Contact/>}></Route>
        </Route>
      </Routes>
      </>
  );
}

export default App;
