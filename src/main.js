/*
 =========================================================
 * Vue Black Dashboard - v1.1.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2023 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'

//import { createApp } from 'vue';
//import App from './App.vue';
//import router from './router';

// Amplify
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// Amplify UI Vue
//import AmplifyVue from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';

// Amplify Predictions
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
Amplify.addPluggable(new AmazonAIPredictionsProvider());
// ↑↑↑↑↑↑

//const app = createApp(App);
//app.config.productionTip = false;
//app.use(router);
//app.use(AmplifyVue);
//app.mount('#app');
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
