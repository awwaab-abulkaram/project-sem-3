// CustomSlider.js
import React, { useState } from 'react';
import './CustomSlider.css'; // Import your custom CSS file
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import complaint from '../Assets/complaint.png';
import docs from '../Assets/docs.png'
import KYR from '../Assets/KYR.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CustomSlider = () => {
    const slidesToShow = 3;
    const [startIndex, setStartIndex] = useState(0);
    const { t } = useTranslation();

    const workInfoData = [
        {
            title : t('Useful.Lang'),
            text : t('Useful.Lang2'),
            image: complaint,
            link: '/'
        },
        {
            image: docs ,
            title : t('Useful.Dom'),
            text : t('Useful.Lang2'),
            link: '/'
        },
        {
            image: KYR,
            title : t('Useful.Sol'),
            text : t('Useful.Lang2'),
            link: '/'
        },
        {
            title: 'Card 4',
            text: 'This is the content for card 4. Add your own text here.',
            image: 'https://via.placeholder.com/300',
            link: '/'
        },     
        {
            title: 'Card 5',
            text: 'This is the content for card 4. Add your own text here.',
            image: 'https://via.placeholder.com/300',
            link: '/'
        }, 
        {
            title: 'Card 6',
            text: 'This is the content for card 4. Add your own text here.',
            image: 'https://via.placeholder.com/300',
            link:'/'
        }, 
    ];

    const handlePrev = () => {
        const step = 3;
        let newIndex = startIndex - step;
        if (newIndex < 0) {
            newIndex = workInfoData.length - slidesToShow;
        }
        setStartIndex(newIndex);
    };
    

    const handleNext = () => {
        const step = 3;
        let newIndex = startIndex + step;
        if (newIndex > workInfoData.length - slidesToShow) {
            newIndex = 0;
        }
        setStartIndex(newIndex);
    };
    

    return (
        <div>
            <div className="custom-slider">
                <div className='useful-section-top'>
                    <p className='primary-heading'>{t('Useful.How')}</p>

                 </div>
                <div className="slider-container">
                    {workInfoData.slice(startIndex, startIndex + slidesToShow).map((data, index) => (
                        <div key={index} className="slide"><Link to={data.link} className='link-in-buttons'>
                            <div className="image-container">
                                <img src={data.image} alt={`Slide ${index + 1}`} />
                            </div>
                            <h2>{data.title}</h2>
                            </Link></div>
                    ))}
                </div>
                <button className="prev-button" onClick={handlePrev}>
                    <ArrowCircleLeftIcon fontSize="large" />
                </button>
                <button className="next-button" onClick={handleNext}>
                    <ArrowCircleRightIcon fontSize="large" />
                </button>
            </div>
        </div>
    );
};

export default CustomSlider;
