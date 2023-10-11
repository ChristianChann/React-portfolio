import './App.css';
import Home from './component/home';
import Navbar from './component/nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './component/about';
import Skills from './component/skill';
import Services from './component/services';
import Contact from './component/contact';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>} />
          <Route path='skill' element={<Skills/>} />
          <Route path='services' element={<Services/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;