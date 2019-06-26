import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import i18n_EN from './json/en'
import i18n_ZH from './json/zh'
import i18n_JA from './json/ja'

const messages = {
  en: i18n_EN,
  zh: i18n_ZH,
  ja: i18n_JA
}

const i18n = new VueI18n({
  locale: 'en',
  messages: messages
})

export default i18n
