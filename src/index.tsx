import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import * as plTranslations from "./locales/pl";
import * as enTranslations from "./locales/en";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pl: { data: plTranslations },
  en: { data: enTranslations }
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["pl", "en"],
    resources: resources,
    lng: 'pl',
    fallbackLng: 'en',
    keySeparator: '.',
    ns: ['data'],
    defaultNS: 'data',
    detection: {
      order: ['cookie', 'htmlTag'],
      caches: ['cookie']
    }
  })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
