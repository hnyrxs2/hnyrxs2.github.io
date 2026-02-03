import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import ToolBar from './components/Toolbar';
import About from './pages/About';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import Carousel from './components/Carousel';

function App() {

  return (
    <BrowserRouter>
      <ToolBar />
      <Carousel />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
