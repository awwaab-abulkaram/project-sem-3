import React,{useEffect} from 'react'
import Navbar2 from './Navbar3'
import { useTranslation } from 'react-i18next';
import Footer from './Footer';
import panchayat from '../Assets/panchayat.jpg'
import fir from '../Assets/fir.webp'
const FileComplaint = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar2/>
      <div className='content-wrapper'>
      <h1 className='heading-bold'>{t('T-File.Main')}</h1>
      <h1 className='heading-bold'>{t('T-File.1')}</h1>
      <p className='content-regular'>{t('C-File.1')}</p>
      <h1 className='heading-bold'>{t('T-File.2')}</h1>
      <p className='content-regular'>{t('C-File.2')}</p>
      <h1 className='heading-bold'>{t('T-File.3')}</h1>
      <div className='blog-image' ><img src={panchayat} alt =''></img></div>
      <p className='content-regular'>{t('C-File.3')}</p>
      <h1 className='heading-bold'>{t('T-File.4')}</h1>
      <p className='content-regular'>{t('C-File.4')}</p>
      <h1 className='heading-bold'>{t('T-File.5')}</h1>
      <p className='content-regular'>{t('C-File.5')}</p>
      <h1 className='heading-bold'>{t('T-File.6')}</h1>
      <p className='content-regular'>{t('C-File.6')}</p>
      <h1 className='heading-bold'>{t('T-File.7')}</h1>
      <div className='blog-image' ><img src={fir} alt =''></img></div>
      <p className='content-regular'>{t('C-File.7')}</p>
      <h1 className='heading-bold'>{t('T-File.8')}</h1>
      <p className='content-regular'>{t('C-File.8')}</p>
      <h1 className='heading-bold'>{t('T-File.9')}</h1>
      <p className='content-regular'>{t('C-File.9')}</p>
      <h1 className='heading-bold'>{t('T-File.10')}</h1>
      <p className='content-regular'>{t('C-File.10')}</p>
      <h1 className='heading-bold'>{t('T-File.Con')}</h1>
      <p className='content-regular'>{t('C-File.Con')}</p>
      </div>
      <Footer/>
    </div>
  )
}

export default FileComplaint