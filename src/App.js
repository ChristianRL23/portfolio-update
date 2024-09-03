import Hero from './layout/Hero/Hero';
import './App.css';
import About from './layout/About/About';
import Projects from './layout/Projects/Projects';
import Contact from './layout/Contact/Contact';
import Footer from './layout/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
