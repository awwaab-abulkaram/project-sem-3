// App.js
import React from 'react';
import "./App.css";
import Home from './Components/Home.js';
import About from './Components/About.js';
import Useful from './Components/Useful.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GetStarted from './Components/GetStarted.js';
import Work from './Components/Work.js';
import Contact from './Components/Contact.js';
import FileComplaint from './Components/FileComplaint.js';
import LegalDocs from './Components/LegalDocs.js';
import KnowRights from './Components/KnowRights.js';
import BotRedirect from './Components/BotRedirect.js';
import { pdfjs } from 'react-pdf';
import CategoryPage from './Components/CategoryPage.js';
import Search from './Components/Search.js';
import Lawyer from './Components/Lawyer.js';
import Environment from './Components/Environment.js';
import Risk from './Components/Risk.js';
import Digital from './Components/Digital.js'
import AboutUs from './Components/AboutUs.js';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/connect-to-lawyer" element={<Lawyer />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/Useful" element={<Useful />} />
        <Route path="/WebBot" element={<BotRedirect />} />
        <Route path="/file-complaint" element={ <FileComplaint />} />
        <Route path="/legal-docs" element={<LegalDocs />} />
        <Route path="/know-rights" element={<KnowRights />} />
        <Route path="/environment" element={<Environment />} />
        <Route path="/disaster-management" element={<Risk />} />
        <Route path="/digital-literacy" element={<Digital />} />
        <Route path="/domain/:category" element={<CategoryPage />} />
        <Route path="/search" element={<Search />} />
    </Routes>
    </Router>
  );
};

export default App;
