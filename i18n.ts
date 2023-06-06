import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en/common.json';

const resources = {
  en: {
    translation: en,
  },
};

void i18n.use(initReactI18next)
  .init({
    // resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;