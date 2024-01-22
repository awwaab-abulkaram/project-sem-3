import React from 'react'
import { useTranslation } from 'react-i18next';
import Navbar2 from './Navbar2';

const GetStarted = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar2 />
      <h1 className='primary-heading'>{t('GetStarted.Greet')}</h1>
      
    </div>
  )
}

export default GetStarted