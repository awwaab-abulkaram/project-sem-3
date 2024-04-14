import React,{useEffect} from 'react'
import Navbar2 from './Navbar3'
import { useTranslation } from 'react-i18next';
import Footer from './Footer';
import flag from '../Assets/flag.webp'
import protest from '../Assets/protest.webp'
const KnowRights = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar2/>
      <div className='content-wrapper'>
      <h1 className='heading-bold'>{t('T-Rights.Main')}</h1>
      <h1 className='heading-bold'>{t('T-Rights.1')}</h1>
      <div className='blog-image' ><img src={flag} alt =''></img></div>
      <p className='content-regular'>{t('C-Rights.1')}</p>
      <h1 className='heading-bold'>{t('T-Rights.2')}</h1>
      <p className='content-regular'>{t('C-Rights.2')}</p>
      <ul className='content-regular'style={{marginLeft:'50px'}}>
        <li><p className='content-regular'>{t('List.1')}</p></li>
        <li><p className='content-regular'>{t('List.2')}</p></li>
        <li><p className='content-regular'>{t('List.3')}</p></li>
        <li><p className='content-regular'>{t('List.4')}</p></li>
        <li><p className='content-regular'>{t('List.5')}</p></li>
        <li><p className='content-regular'>{t('List.6')}</p></li>
      </ul>
      <h1 className='heading-bold'>{t('T-Rights.3')}</h1>
      <p className='content-regular'>{t('C-Rights.3')}</p>
      <h1 className='heading-bold'>{t('T-Rights.4')}</h1>
      <p className='content-regular'>{t('C-Rights.4')}</p>
      <h1 className='heading-bold'>{t('T-Rights.5')}</h1>
      <p className='content-regular'>{t('C-Rights.5')}</p>
      <h1 className='heading-bold'>{t('T-Rights.6')}</h1>
      <p className='content-regular'>{t('C-Rights.6')}</p>
      <h1 className='heading-bold'>{t('T-Rights.7')}</h1>
      <div className='blog-image' ><img src={protest} alt =''></img></div>
      <p className='content-regular'>{t('C-Rights.7')}</p>
      <h1 className='heading-bold'>{t('T-Rights.8')}</h1>
      <p className='content-regular'>{t('C-Rights.8')}</p>
      <h1 className='heading-bold'>{t('T-Rights.9')}</h1>
      <p className='content-regular'>{t('C-Rights.9')}</p>
      <h1 className='heading-bold'>{t('T-Rights.Con')}</h1>
      <p className='content-regular'>{t('C-Rights.Con')}</p>
      </div>
      <Footer/>
    </div>
  )
}

export default KnowRights