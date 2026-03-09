import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from './pages/Services';
import Navbar from "./Navigational";
import ComputerRepair from "./pages/services/ComputerRepair";
import InternetSetup from "./pages/services/InternetSetup";
import LocalWebDev from "./pages/services/LocalWebDev";

function App() {

  return (
    <BrowserRouter>

    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services/>} />

      <Route path="/services/computer-repair" element={<ComputerRepair />} />
      <Route path="/services/internet-setup" element={<InternetSetup />} />
      <Route path="/services/local-web-dev" element={<LocalWebDev />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App