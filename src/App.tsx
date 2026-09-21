import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import { About, Achievements, Contact, Education, Experience, Projects, Services, Skills } from './pages/InnerPages'

function App() {
  return <BrowserRouter basename="/portfolio"><Layout><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/education" element={<Education />} /><Route path="/experience" element={<Experience />} /><Route path="/skills" element={<Skills />} /><Route path="/services" element={<Services />} /><Route path="/projects" element={<Projects />} /><Route path="/achievements" element={<Achievements />} /><Route path="/contact" element={<Contact />} /></Routes></Layout></BrowserRouter>
}

export default App
