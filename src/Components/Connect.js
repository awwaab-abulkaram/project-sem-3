import React from 'react'
import { useTranslation } from 'react-i18next';

const Connect = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const redirectToLawyerPage = () => {
    window.location.href = '/connect-to-lawyer';
  };
  return (
    <div ref={ref} className='connect-section-container'>
       <div className='connect-image-container'>
        <div className='connect-section-text-container'>
            <p className='secondary-heading'>{t('Connect.Heading')}</p>
            <p className='secondary-text'>{t('Connect.Text')}</p>
            <div className='about-button-container'>
            <button className='connectme-button' onClick={redirectToLawyerPage}>
            {t('Connect.Button')}
            </button>
            </div>
        </div>
        </div> 
    </div>
  )
});

export default Connect