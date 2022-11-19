import logo from './logo.svg';
import { Route, Routes, Router } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Me from './components/me/Me';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Me />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
