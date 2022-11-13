import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.scss';
import Portofolio from './components/Portofolio/Portofolio';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="portfolio" element={<Portofolio />}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;
