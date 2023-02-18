import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import theme from '@app/config/theme';
import en from './locales/en';
import fr from './locales/fr';

const { EnFlag, FrFlag } = theme.images;

export const langs = [
  {
    key: 'fr',
    label: 'Français',
    flagIcon: FrFlag,
  },
  {
    key: 'en',
    label: 'English',
    flagIcon: EnFlag,
  },
];

i18n.use(initReactI18next).init({
  resources: {
    fr: { ...fr },
    en: { ...en },
  },
  lng: 'fr',
  fallbackLng: 'fr',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  saveMissing: true,
});

i18n.on('missingKey', (lngs, namespace, key) => {
  // eslint-disable-next-line no-console
  // console.log(
  //   `${lngs}, ${namespace}, A missing translation for the key ${key}`,
  // );
});

export const t = (key, args?) => i18n.t(key, args);

export default i18n;
