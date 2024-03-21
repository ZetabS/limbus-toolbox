'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '@/i18n/messages/en.json';
import translationKO from '@/i18n/messages/ko.json';

export const fallbackLng = 'en';
export const languages = [fallbackLng, 'ko'];

const resources = {
  en: {
    translation: translationEN
  },
  ko: {
    translation: translationKO
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'en',
    debug: true,
    keySeparator: '.',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
