// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'

import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import store from './store/index'
import router from './router'

// import $ from 'jquery';
// Vue.prototype.$= $;



import 'whatwg-fetch'
import './style/element-variables.scss';

Vue.config.productionTip = false


/*
render 函数
 */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})


