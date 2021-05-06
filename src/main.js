import Vue from 'vue'
import App from './App.vue'

//Agregar vuefire decrepated requiere 2020
import { rtdbPlugin } from 'vuefire'
Vue.use(rtdbPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
