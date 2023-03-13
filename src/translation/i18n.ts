import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import de from './de.json';
import it from './it.json';
import pt from './pt.json';
import cn from './cn.json';
import ru from './ru.json';

const resources = {
  en: { translations: en },
  ru: { translations: ru },
  es: { translations: es },
  fr: { translations: fr },
  de: { translations: de },
  it: { translations: it },
  pt: { translations: pt },
  cn: { translations: cn },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'ru',
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
