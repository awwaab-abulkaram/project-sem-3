import React from 'react';
import { useTranslation } from 'react-i18next';

const LegalSafeguards = ({ data}) => {
    const { t } = useTranslation();
  return (
    <div>
      <h1>{t(data.title)}</h1>
      {data.sections.map((section, index) => (
        <div key={index}>
          <h2>{t(section.heading)}</h2>
          {section.content && <p>{t(section.content)}</p>}
          
          {section.laws && (
            <div>
              <h3>{t('Relevant Laws')}</h3>
              <ul>
                {section.laws.map((law, lawIndex) => (
                  <li key={lawIndex}>{t(law)}</li>
                ))}
              </ul>
            </div>
          )}

          {section.steps && (
            <div>
              <h3>{t('Steps to Take')}</h3>
              <ol>
                {section.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{t(step)}</li>
                ))}
              </ol>
            </div>
          )}

          {section.initiatives && (
            <div>
              <h3>{t('Initiatives')}</h3>
              <ul>
                {section.initiatives.map((initiative, initiativeIndex) => (
                  <li key={initiativeIndex}>{t(initiative)}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LegalSafeguards;
