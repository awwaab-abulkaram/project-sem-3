import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Button from '@mui/material/Button';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import StopIcon from '@mui/icons-material/Stop';
import './PdfViewer.css'; // Import CSS file

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PdfViewer2({ language, cardName, pdfUrl }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.3); // State for zoom scale
  const [textLayers, setTextLayers] = useState([]); // State to store text layers of each page
  const [isReading, setIsReading] = useState(false); // State for reading status

  useEffect(() => {
    console.log('pdfUrl:', pdfUrl); // Log pdfUrl prop
    const fetchTextLayers = async () => {
      const layers = [];
      try {
        if (!pdfUrl) return;
        const pdfDoc = await pdfjs.getDocument({ url: pdfUrl }).promise;
        for (let i = 1; i <= pdfDoc.numPages; i++) {
          const page = await pdfDoc.getPage(i);
          const textContent = await page.getTextContent();
          layers.push(textContent.items.map(item => item.str));
        }
        setTextLayers(layers);
        setNumPages(pdfDoc.numPages);
      } catch (error) {
        console.error('Error loading PDF document:', error);
      }
    };
    
    fetchTextLayers();
  }, [pdfUrl]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleZoomIn = () => {
    setScale(scale + 0.1); // Increase the scale by 0.1
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1); // Decrease the scale by 0.1
  };

  const readAloud = () => {
    setIsReading(true);
    const utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'en-IN'; // Set language to Indian English
    utterance.rate = 1; // Adjust speech rate if needed
    for (let i = 0; i < textLayers.length; i++) {
      const text = textLayers[i].join(' '); // Concatenate text items of each page
      utterance.text += text + ' ';
    }
    utterance.onend = () => {
      setIsReading(false);
    };
    speechSynthesis.speak(utterance);
  };

  const stopReading = () => {
    setIsReading(false);
    speechSynthesis.cancel();
  };

  return (
    <div className='pdf-view'>
      <div className="zoom-buttons">
        <Button onClick={handleZoomIn} variant="contained" size="small" startIcon={<ZoomInIcon />}>
          Zoom In
        </Button>
        <Button onClick={handleZoomOut} variant="contained" size="small" startIcon={<ZoomOutIcon />}>
          Zoom Out
        </Button>
        {isReading ? (
          <Button onClick={stopReading} variant="contained" size="small" startIcon={<StopIcon />}>
            Stop
          </Button>
        ) : (
          <Button onClick={readAloud} variant="contained" size="small">
            Read Aloud
          </Button>
        )}
      </div>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} />
        ))}
      </Document>
    </div>
  );
}

export default PdfViewer2;
