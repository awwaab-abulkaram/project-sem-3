// App.js
import React from 'react';
import "./App.css";
import Home from './Components/Home.js';
import About from './Components/About.js';
import Useful from './Components/Useful.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetStarted from './Components/GetStarted.js';
import Work from './Components/Work.js';
import Contact from './Components/Contact.js';
import BotWeb from './Components/BotWeb.js';

const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/Useful" element={<Useful />} />
        <Route path="/WebBot" element={<BotWeb />} />
    </Routes>
    </Router>
  );
};

export default App;
