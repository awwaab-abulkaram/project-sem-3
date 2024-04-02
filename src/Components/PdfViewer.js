import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from '../Assets/[G-189].pdf';
import Button from '@mui/material/Button';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import './PdfViewer.css'; // Import CSS file

function PdfViewer() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1); // State for zoom scale

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleZoomIn = () => {
    setScale(scale + 0.1); // Increase the scale by 0.1
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1); // Decrease the scale by 0.1
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
      </div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages)).map((x, i) => i + 1).map((page => <Page pageNumber={page} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />))}
      </Document>
    </div>
  );
}

export default PdfViewer;
