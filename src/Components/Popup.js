// PopupComponent.js
import React, { useState } from 'react';
import GridComponent from './GridComponent';
import './Popup.css'; // Make sure to create a corresponding CSS file

const PopupComponent = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(true);
  

  const handleClosePopup = () => {
    setShowPopup(false);
    onClose(); // This can be a function to perform additional actions when the popup is closed
  };

  return showPopup ? (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={handleClosePopup}>
          X
        </button>
        <GridComponent onClosePopup={handleClosePopup} />
      </div>
    </div>
  ) : null;
};

export default PopupComponent;
