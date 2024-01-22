import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import About from './About';
import Work from './Work';
import Useful from './Useful';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import PopupComponent from './Popup';




const Home = () => {
    const { t,i18n } = useTranslation();
    const aboutRef = useRef(null);//autoscroll

    const scrollToAbout = () => {
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };//add more if you want

    const [showPopup] = useState(true);
    const [animateHeader, setAnimateHeader] = useState(false);
    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
        setAnimateHeader(true);      };
    
  return (
    <div className='home-container'>
        <Navbar scrollToAbout={scrollToAbout} /> 
        {showPopup && <PopupComponent onClose={handleLanguageChange} />}
        <div className='home-banner-container'>
            <div className='home-banner-Image-container'>
            </div>
            <div className='home-text-section'>
                <h1 className= {`primary-heading ${animateHeader ? 'animateHeader' : ''}`}>
                    {t('Home.Welcome')}
                </h1>
                <p className='primary-text'>
                    {t('Home.Legal')}
                </p>
                
                    <button className='secondary-button'>
                        <Link to='/GetStarted' className='link-in-buttons'>
                        {t('Home.GS')}
                        </Link>
                    </button>
              </div>
        </div>
        <Work/>
        <About ref={aboutRef}/>
        <Useful/>
        <Footer/>    
</div>
  )
}

export default Home