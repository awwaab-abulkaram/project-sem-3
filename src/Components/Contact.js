// CustomSlider.js
import React, { useState } from 'react';
import './CustomSlider.css'; // Import your custom CSS file
import Navbar2 from './Navbar2';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import complaint from '../Assets/complaint.png';
import { Link } from 'react-router-dom';

const CustomSlider = () => {
    const slidesToShow = 3;
    const [startIndex, setStartIndex] = useState(0);

    const workInfoData = [
        {
            title: 'Card 1',
            text: 'This is the content for card 1. Add your own text here.',
            image: complaint,
            link: '/'
        },
        {
            title: 'Card 2',
            text: 'This is the content for card 2. Add your own text here.',
            image: 'https://via.placeholder.com/300',
            link: '/'
        },
        {
            title: 'Card 3',
            text: 'This is the content for card 3. Add your own text here.',
            image: 'https://via.placeholder.com/300',
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
            <Navbar2 />
            <div className="custom-slider">
                <div className="slider-container">
                    {workInfoData.slice(startIndex, startIndex + slidesToShow).map((data, index) => (
                        <div key={index} className="slide"><Link to={data.link} className='link-in-buttons'>
                            <div className="image-container">
                                <img src={data.image} alt={`Slide ${index + 1}`} />
                            </div>
                            <h2>{data.title}</h2>
                            <p className="card-para">{data.text}</p>
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
