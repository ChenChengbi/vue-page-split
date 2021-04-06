/*
 * @Author: Billy
 * @Date: 2021-04-05 20:59:56
 * @LastEditors: Billy
 * @LastEditTime: 2021-04-05 21:56:49
 * @Description: 请输入
 */
import Vue from 'vue'
import App from './App.vue'

// import PageSplit from './../packages/index'
// Vue.use(PageSplit)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')