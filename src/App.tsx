import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';

import './App.scss'
// import ToolBar from './components/Toolbar';
import About from './pages/About';
import Contact from './pages/Contact';
import MainPage from './pages/MainPage';
import ScrollNavigator from './components/ScrollNavigator';
import MenuProvider from './components/MenuProvider';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MenuProvider>
          {/* <ToolBar /> */}
          <ScrollNavigator />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MenuProvider>

      </BrowserRouter>
    </Provider>
  );
}

export default App
