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
import Admin from './Components/Admin.js';
import Admin2 from './Components/Admin2.js';
import CategoryPage from './Components/CategoryPage.js';
import PdfViewer2 from './Components/pdfViewer2.js';
import Search from './Components/Search.js';
import Lawyer from './Components/Lawyer.js';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin2" element={<Admin2/>} />
        <Route path="/about" element={<About />} />
        <Route path="/connect-to-lawyer" element={<Lawyer />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/Useful" element={<Useful />} />
        <Route path="/WebBot" element={<BotRedirect />} />
        <Route path="/file-complaint" element={ <FileComplaint />} />
        <Route path="/legal-docs" element={<LegalDocs />} />
        <Route path="/know-rights" element={<KnowRights />} />
        <Route path="/domain/:category" element={<CategoryPage />} />
        <Route path="/pdfviewer/:pdfUrl" element={<PdfViewer2/>} />
        <Route path="/search" element={<Search />} />
    </Routes>
    </Router>
  );
};

export default App;
