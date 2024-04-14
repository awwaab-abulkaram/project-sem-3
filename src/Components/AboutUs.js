import React from 'react'
import Navbar2 from './Navbar3'
import { useTranslation } from 'react-i18next';


const AboutUs = () => {
    const { t } = useTranslation();
  return (
    <div>
        <Navbar2/>
        <div className='abstract-content-wrapper'>
            <div className='abstract-text'>
                <h1 className='abstract-heading-bold'>{t('Abstract.Title')}</h1>
                <p className='abstract-content-regular'>{t('Abstract.Content')}</p></div>
        </div>
    </div>
  )
}

export default AboutUs