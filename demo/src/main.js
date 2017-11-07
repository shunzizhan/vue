// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueI18n from 'vue-i18n'
// import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import CH from '@/common/i18n/zh.json'
import EN from '@/common/i18n/en.json'

Vue.config.productionTip = false

Vue.use(VueI18n)
// Vue.use(VueResource)
const messageCH = {
  en: EN,
  zh: CH
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: messageCH // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App }
  // render: h => h(App)
})
