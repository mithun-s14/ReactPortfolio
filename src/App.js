import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div className="bg-[#0a192f]">
      <Navbar />
      <div className="space-y-20">
      <Home />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
      </div>
    </div>
  );
}

export default App;
