import React from 'react'
import { useTranslation } from 'react-i18next';


const About = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const redirect = () => {
    window.location.href = '/aboutus';
  };
  return (
    <div ref={ref} className='about-section-container'>
       <div className='about-image-container'>
        <div className='about-section-text-container'>
            <p className='about-heading'>{t('About.Why')}</p>
            <p className='about-text'>{t('About.Why2')}</p>
            <div className='about-button-container'>
            <button className='about-button' onClick={redirect}>
            {t('About.LearnMore')}
            </button>
            </div>
        </div>
        </div> 
    </div>
  )
});

export default About