import React from 'react';
import { useTranslation } from 'react-i18next';

const Govt = ({ GovtAccess, content1 }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t(GovtAccess)}</h1>

      <div>
        {/* <h2>{t('Introduction')}</h2>
        <p>{t(content1.Introduction)}</p> */}
      </div>

      <div>
        {/* <h2>{t('Legal Significance')}</h2> */}
        <p>{t(content1.rti)}</p>
        <p>{t(content1.mgnrega)}</p>
        <p>{t(content1.lawsAndSchemes.nrhm)}</p>
        <p>{t(content1.lawsAndSchemes.pmay)}</p>
        <p>{t(content1.lawsAndSchemes.nfsa)}</p>
      </div>

      <div>
        {/* <h2>{t('Roadmap for Obtaining Legal Aid')}</h2> */}
        <p>{t(content1.roadmapForLegalAid.legalAidClinics)}</p>
        <p>{t(content1.roadmapForLegalAid.legalLiteracyPrograms)}</p>
        <p>{t(content1.roadmapForLegalAid.panchayatCollaboration)}</p>
        <p>{t(content1.roadmapForLegalAid.mobileLegalAidUnits)}</p>
        <p>{t(content1.roadmapForLegalAid.onlinePlatforms)}</p>
      </div>

      <div>
        {/* <h2>{t('Conclusion')}</h2> */}
        <p>{t(content1.Conclusion)}</p>
      </div>
    </div>
  );
};

export default Govt;
