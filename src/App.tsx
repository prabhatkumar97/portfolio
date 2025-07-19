import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Blog from './components/sections/Blog';
import Experience from './components/sections/Experience';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-400 text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Education />
      <Blog/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;