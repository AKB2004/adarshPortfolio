// import './App.css'
import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import About from './components/About'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import ProjectsGrid from './components/ProjectsGrid'
import Footer from './components/FooterSection'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="text-white ">
      <Navbar/>
      <div className="pt-20">
        <HeroSection />
        <About/>
        <ExperienceSection/>
        <ProjectsSection/>
        <ProjectsGrid/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
