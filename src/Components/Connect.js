import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const Connect = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <div ref={ref} className='about-section-container'>
       <div className='about-image-container'>
        <div className='about-section-text-container'>
            <p className='primary-heading'>{t('About.Why')}</p>
            <p className='primary-text'>{t('About.Why2')}</p>
            <div className='about-button-container'>
                <button className='secondary-button'><Link to='/connect-to-lawyer' className='link-in-buttons'>{t('About.LearnMore')}</Link></button>
            </div>
        </div>
        </div> 
    </div>
  )
});

export default Connect