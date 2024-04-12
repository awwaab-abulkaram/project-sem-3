import React, { useEffect } from 'react';
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
import Footer from './Footer';
import health from '../Assets/health2.png'
import finance from '../Assets/finance2.png'

const GetStarted = () => {
  const { t } = useTranslation();
  const workInfoData = [
    {
      image: agri,
      title: t('Legal-Domain.1'),
      link: '/domain/agriculture',
    },
    {
      image: property,
      title: t('Legal-Domain.2'),
      link: '/domain/land&property',
    },
    {
      image: edu,
      title: t('Legal-Domain.3'),
      link: '/domain/educational',
    },
    {
      image: employ,
      title: t('Legal-Domain.4'),
      link: '/domain/employment&labor',
    },
    {
      image: wr,
      title: t('Legal-Domain.5'),
      link: '/domain/womensrights',
    },
    {
      image: govt,
      title: t('Legal-Domain.6'),
      link: '/domain/govt-schemes',
    },
    {
      image: health,
      title: 'Healthcare',
      link: '/domain/healthcare',
    },
    {
      image: finance,
      title: 'Rural Financing',
      link: '/domain/rural-finance',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar3 />
      <h1 className='primary-heading'>{t('GetStarted.Greet')}</h1>
      <h3 className='getstarted-text'>Select a domain to continue!</h3>
      <button className='search-button'>
        <Link to='/search' className='link-in'>
          <span className='button-text'>Search for a Legal Domain Here</span>
        </Link>
      </button>
      <div className='container-box'>
        {workInfoData.map((data, index) => (
          <div className='box-info' key={index}>
            <Link to= {data.link} className='link-in-buttons'>
              <div className='img-container'>
                <img src={data.image} alt='' />
              </div>
              <h2>{data.title}</h2>
            </Link>
          </div>
        ))}
      </div>
      <button className='bot-button'>
        <Link to='/WebBot' className='link-in'>
          Can't find what you are looking for? Ask AI
        </Link>
      </button>
      <Footer />
    </div>
  );
};

export default GetStarted;
