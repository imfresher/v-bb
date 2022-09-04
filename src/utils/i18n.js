import { createI18n } from './smart-vue-i18n/index'

import configs from '@/configs';

import enLocaleElement from "element-plus/lib/locale/lang/en";
import viLocaleElement from "element-plus/lib/locale/lang/vi";

import enLocale from "@/lang/en-US";
import viLocale from "@/lang/vi-VN";

const langResources = {
  'en-US': {
    something: {
      //...
    },
    ...enLocaleElement,
    ...enLocale
  },

  'vi-VN': {
    something: {
      //...
    },
    ...viLocaleElement,
    ...viLocale
  }
}

const i18n = createI18n({
  locale: localStorage.getItem(configs.langStoreKey) || configs.defaultLang,
  messages: langResources
})

export const changeLocale = function(langName) {
  i18n.setLang(langName)
  localStorage.setItem(configs.langStoreKey, langName)
}

export const translate = function(key) {
  return i18n.$st(key)
}

export const installI18n = (app) => {
  //
}

export default {
  methods: {
    i18nt(key) {
      return i18n.$st(key)
    },

    i18n2t(key1, key2) {
      return i18n.$st2(key1, key2)
    },

  }
}
