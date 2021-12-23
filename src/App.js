import './App.css';
import { Routes, Route } from "react-router-dom";

//Components
import Nav from './components/navBar';

//Pages
import LandingPage from './pages/landingPage';
import ServicesPage from './pages/servicesPage'
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
