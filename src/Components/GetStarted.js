import React from 'react'
import { useTranslation } from 'react-i18next';
import Navbar3 from './Navbar3';
import './GetStarted.css';
import { Link } from 'react-router-dom';
import agri from '../Assets/agriculture.png';
import employ from '../Assets/employ.png';
import property from '../Assets/property.png';
import wr from '../Assets/wr.png';
import edu from '../Assets/edu.png';
import govt from '../Assets/govt.png';
import Searchbutton from './searchbutton';
import Footer from './Footer';

const GetStarted = () => {
  const { t } = useTranslation();
  const workInfoData = [
    {
        image:  agri,
        title : t('Legal-Domain.1'),
        link : '/agriculture'
    },
    {
        image: property,
        title : t('Legal-Domain.2'),
        link : '/land&property'    
    },
    {
        image : edu ,
        title : t('Legal-Domain.3'),
        link : '/educational'
    },
    {
      image : employ ,
      title : t('Legal-Domain.4'),
      link : '/employment&labor'
    },
    {
      image : wr ,
      title : t('Legal-Domain.5'),
      link : '/womensrights'
    },
    {
      image : govt ,
      title : t('Legal-Domain.6'),
      link : '/govt.schemes'
    },
    {
      image : govt ,
      title : t('Legal-Domain.6'),
      link : '/govt.schemes'
    },  
    {
      image : govt ,
      title : t('Legal-Domain.6'),
      link : '/govt.schemes'
    },
    {
      image : govt ,
      title : t('Legal-Domain.6'),
      link : '/govt.schemes'
    },
]
  return (
    <div>
      <Navbar3 />
      <h1 className='primary-heading'>{t('GetStarted.Greet')}</h1>
      <h3 className='getstarted-text'>Select a domain to continue!</h3>
      <Searchbutton/>
      <div className='container-box'>
    {
        // Split workInfoData into chunks of 3
        Array.from({ length: 3 }, (v, rowIndex) => (
            <div key={rowIndex} className='work-section-row'>
                {
                    // Map each row's elements
                    workInfoData.slice(rowIndex * 3, rowIndex * 3 + 3).map((data, colIndex) => (
                        <Link to={data.link} className='link-in-buttons'><div key={colIndex} className='box-info'>
                            <div className='img-container'>
                                <img src={data.image} alt='' />
                            </div>
                            <h2>{data.title}</h2>
                        </div></Link>
                    ))
                }
            </div>
        ))
    }
</div>
  <button className='bot-button'>
                        <Link to='/WebBot' className='link-in'>
                          Can't find what you are looking for? Ask AI
                        </Link>
  </button>
  <Footer/>
    </div>
  )
}

export default GetStarted