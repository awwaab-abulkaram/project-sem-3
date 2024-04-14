import React,{useEffect} from 'react'
import Navbar2 from './Navbar3'
import { useTranslation } from 'react-i18next';
import Footer from './Footer';
import meeseva from '../Assets/meeseva.webp'
import pan from '../Assets/pan.webp'
const LegalDocs = () => {
  const { t } = useTranslation();
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar2/>
      <div className='content-wrapper'>
      <h1 className='heading-bold'>{t('T-Legal.Main')}</h1>
      <h1 className='heading-bold'>{t('T-Legal.1')}</h1>
      <p className='content-regular'>{t('C-Legal.1')}</p>
      <h1 className='heading-bold'>{t('T-Legal.2')}</h1>
      <p className='content-regular'>{t('C-Legal.2')}</p>
      <h1 className='heading-bold'>{t('T-Legal.3')}</h1>
      <div className='blog-image' ><img src={meeseva} alt =''></img></div>
      <p className='content-regular'>{t('C-Legal.3')}</p>
      <h1 className='heading-bold'>{t('T-Legal.4')}</h1>
      <p className='content-regular'>{t('C-Legal.4')}</p>
      <h1 className='heading-bold'>{t('T-Legal.5')}</h1>
      <p className='content-regular'>{t('C-Legal.5')}</p>
      <h1 className='heading-bold'>{t('T-Legal.6')}</h1>
      <p className='content-regular'>{t('C-Legal.6')}</p>
      <h1 className='heading-bold'>{t('T-Legal.7')}</h1>
      <p className='content-regular'>{t('C-Legal.7')}</p>
      <h1 className='heading-bold'>{t('T-Legal.8')}</h1>
      <p className='content-regular'>{t('C-Legal.8')}</p>
      <h1 className='heading-bold'>{t('T-Legal.9')}</h1>
      <p className='content-regular'>{t('C-Legal.9')}</p>
      <h1 className='heading-bold'>{t('T-Legal.10')}</h1>
      <div className='blog-image' ><img src={pan} alt =''></img></div>
      <p className='content-regular'>{t('C-Legal.10')}</p>
      <h1 className='heading-bold'>{t('T-Legal.Con')}</h1>
      <p className='content-regular'>{t('C-Legal.Con')}</p>

      </div>
      <Footer/>
    </div>
  )
}

export default LegalDocs