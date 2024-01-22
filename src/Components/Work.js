import React from 'react'
import lang from '../Assets/lang.png'
import domain from '../Assets/domain.png'
import solution from '../Assets/solution-1.png'
import { useTranslation } from 'react-i18next';

const Work = () => {
    const { t } = useTranslation();
    const workInfoData = [
        {
            image: lang ,
            title : t('How.Lang'),
            text : t('How.Lang2'),
        },
        {
            image: domain ,
            title : t('How.Dom'),
            text : t('How.Dom2'),
        },
        {
            image : solution ,
            title : t('How.Sol'),
            text : t('How.Sol2'),
        }
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-heading-work'>{t('How.How')}</p>
            <h1 className='primary-subheading'>{t('How.How2')}</h1>

        </div>
        <div className='work-section-bottom'>
            {
                workInfoData.map((data)=>(
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt =""/>
                            </div>
                            <h2>{data.title}</h2>
                            <p></p>
                    </div>
                ) )
            }
        </div>
    </div>
  )
}

export default Work