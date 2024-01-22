// GridComponent.js
import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './GridComponent.css'; // Make sure to create a corresponding CSS file

const GridComponent = ({ onClosePopup }) => {
  const { t, i18n } = useTranslation();
  const [hoveredLanguage, setHoveredLanguage] = useState(null);

  const handleHover = (languageCode) => {
    setHoveredLanguage(languageCode);
    i18n.changeLanguage(languageCode);
  };


  const languageOptions = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' }, // Hindi
    { code: 'bn', label: 'বাংলা' }, // Bengali
    { code: 'gu', label: 'ગુજરાતી' }, // Gujarati
    { code: 'ma', label: 'मराठी' }, // Marathi
    { code: 'te', label: 'తెలుగు' }, // Telugu
    { code: 'ta', label: 'தமிழ்' }, // Tamil
    { code: 'kn', label: 'ಕನ್ನಡ' }, // Kannada
    { code: 'as', label: 'অসমীয়া' }, // Assamese
  ];

  const handleLanguageClick = (languageCode) => {
    i18n.changeLanguage(languageCode);
    onClosePopup(); // Close the popup when a language is selected
  };

  return (
    <div>
      <div className="hovered-element">
        {t('DefaultWebpageLanguage')}
      </div>
      <div className="grid-container">
        {languageOptions.map((language) => (
          <div
            key={language.code}
            className="grid-item"
            onClick={() => handleLanguageClick(language.code)}
            onMouseEnter={() => handleHover(language.code)}
            onMouseLeave={() => setHoveredLanguage(null)}
          >
            <span>{language.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
