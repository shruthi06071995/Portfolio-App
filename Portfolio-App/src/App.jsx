import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ProjectCard from './Components/ProjectCard'
import About from './Pages/About'
import Contact from './Pages/Contacts'
import Home from './Pages/Home'
import Projects from './Pages/Projects'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectcard" element={<ProjectCard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
