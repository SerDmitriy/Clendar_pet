import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import commonEn from './translations/en/commonEn'
import commonRu from './translations/ru/commonRu'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: { ...commonEn, ...commonRu },
		lng: 'en',

		keySeparator: false,

		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
