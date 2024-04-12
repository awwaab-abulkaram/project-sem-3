import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar2 from './Navbar3';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './CategoryPage.css';
import { Button } from '@mui/material';

const CategoryPage = () => {
  const { category } = useParams();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation(); // Destructure i18n from useTranslation

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`http://localhost:5500/cards/${category}`);
        setCards(response.data);
      } catch (err) {
        setError('Error fetching cards: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [category]);

  const fetchPdfUrl = async (cardName, language) => {
    try {
      const response = await axios.get(`http://localhost:5500/get-pdf/${cardName}/${language}`);
      return response.data.url;
    } catch (error) {
      console.error('Error fetching PDF URL:', error);
      return null;
    }
  };

  const handleClick = async (card) => {
    try {
      const language = i18n.language; // Access current language from i18n
      const pdfUrl = await fetchPdfUrl(card.name, language);
      if (pdfUrl) {
        window.open(`http://localhost:5500/articles/${pdfUrl}`, '_blank');
      } else {
        console.error('PDF URL not found');
      }
    } catch (error) {
      console.error('Error fetching PDF URL:', error);
    }
  };

  return (
    <div>
      <Navbar2 />
      <h1 className='primary-heading'>You have selected the domain:</h1>
      <h1 className='primary-heading'>{t(`Domains.${category}`)}</h1>
      {loading && <div>Loading cards...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <div className="card-container">
          {cards.map(card => (
            <div key={card._id} className="elongated-card">
              {card.image && <img src={card.image} alt={card.name} className='img-container' />}
              <div className="card-details">
                <h3>{t(`cardNames.${card.name}`)}</h3>
              </div>
              <Button color='success' variant="contained" className="btn-view-pdf" onClick={() => handleClick(card)}>View PDF</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
