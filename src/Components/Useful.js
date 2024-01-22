import React from 'react'
import complaint from '../Assets/complaint.png'
import docs from '../Assets/docs.png'
import KYR from '../Assets/KYR.png'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const Useful = () => {
    const { t } = useTranslation();

    const workInfoData = [
        {
            image: complaint ,
            title : t('Useful.Lang'),
            text : t('Useful.Lang2'),
            link :'/about'
        },
        {
            image: docs ,
            title : t('Useful.Dom'),
            text : t('Useful.Lang2'),
            link :'/contact'
        },
        {
            image: KYR,
            title : t('Useful.Sol'),
            text : t('Useful.Lang2'),
            link :'/WebBot'
        }
    ]
  return (
    <div className='useful-section-wrapper'>
        <div className='useful-section-top'>
            <p className='primary-heading'>{t('Useful.How')}</p>
            <h1 className='primary-subheading'>{t('Useful.How2')}</h1>

        </div>
        <div className='useful-section-bottom'>

            {
                workInfoData.map((data)=>(
                    <div className='useful-section-info'>
                        <Link to={data.link} className='link-in-buttons'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt =""/>
                            </div>
                            <h2>{data.title}</h2>
                            <p className='card-para'>{data.text}</p>
                        </Link>
                    </div>
                ) )
            }
        </div>
    </div>
  )
}

export default Useful