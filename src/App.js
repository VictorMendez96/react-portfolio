
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Import all pages
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import PortfolioPage from './pages/portfolioPage';
import ResumePage from './pages/resumePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutPage />}/>
        <Route path="/About" element={<AboutPage />}/>
        <Route path="/Portfolio" element={<PortfolioPage/>}/>
        <Route path="/Resume" element={<ResumePage/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
