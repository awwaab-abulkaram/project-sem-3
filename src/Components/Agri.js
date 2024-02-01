import React from 'react'
import Navbar3 from './Navbar3'
import { useTranslation } from 'react-i18next';
import LegalSafeguardsData from '../locales/en.json';
import LegalSafeguards from './LegalSafeguards';

const Agri = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar3/>
      <LegalSafeguards data={LegalSafeguardsData} />
    </div>
  )
}

export default Agri