// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import hiTranslation from './locales/hi.json';
import teTranslation from './locales/te.json';
import bnTranslation from './locales/bn.json';
import guTranslation from './locales/gu.json';
import maTranslation from './locales/ma.json';
import taTranslation from './locales/ta.json';
import knTranslation from './locales/kn.json';
import asTranslation from './locales/as.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation },
      te: { translation: teTranslation },
      bn: { translation: bnTranslation },
      gu: { translation: guTranslation },
      ma: { translation: maTranslation },
      ta: { translation: taTranslation },
      kn: { translation: knTranslation },
      as: { translation: asTranslation },


    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
