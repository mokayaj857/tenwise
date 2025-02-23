// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";

const App = () => {
  return (
    <Router>
      <Routes>
        
        
        {/* Qrcode under Testimonials */}
        <Route path="/" element={<Hero />} /> 
        <Route path="home" element={<Home />} />
        <Route path="footer" element={<Footer />} />
        <Route path="/" element={<Chatbot />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="faq" element={<Faq />} />
        
      </Routes>
      

        
    </Router>
  );
};

export default App;