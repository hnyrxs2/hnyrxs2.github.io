import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.scss'
// import ToolBar from './components/Toolbar';
import About from './pages/About';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import ScrollNavigator from './components/ScrollNavigator';
import MenuProvider from './components/MenuProvider';

function App() {

  return (
    <BrowserRouter>
      <MenuProvider>
        {/* <ToolBar /> */}
        <ScrollNavigator />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MenuProvider>

    </BrowserRouter>
  );
}

export default App
