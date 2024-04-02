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
import Agri from './Components/Agri.js';
import Womens from './Components/womens.js';
import Land from './Components/land.js';
import Edu from './Components/edu.js';
import Govt from './Components/govt.js';
import BotRedirect from './Components/BotRedirect.js';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


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
        <Route path="/WebBot" element={<BotRedirect />} />
        <Route path="/file-complaint" element={ <FileComplaint />} />
        <Route path="/legal-docs" element={<LegalDocs />} />
        <Route path="/know-rights" element={<KnowRights />} />
        <Route path="/agriculture" element={<Agri />} />
        <Route path="/womensrights" element={<Womens />} />
        <Route path="/land&property" element={<Land />} />
        <Route path="/educational" element={<Edu />} />
        <Route path="/govt.schemes" element={<Govt />} />
    </Routes>
    </Router>
  );
};

export default App;
