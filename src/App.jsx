import SideBar from "./components/sideBar"
import Home from "./components/home"
import About from "./components/about"
import TechStack from "./components/techStack/techStack"
import Contact from "./components/contact"
import Projects from "./components/project/projects"
import Work from "./components/work"
import Edu from "./components/edu"
import Testimonial from "./components/testimonial"

function App() {
  return(
    <div className="text-white bg-zinc-100 dark:bg-zinc-800 dark:!text-white overflow-hidden">
      
     <SideBar/>   
     <Home />
     <About/>
     <Work/>
     <TechStack/>
     <Projects/>
     <Edu/>
     <Testimonial/>
     <Contact/>
      
            </div>
  )
}

export default App
