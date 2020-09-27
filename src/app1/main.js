import Vue from 'vue'
import App from './components/App1';
import store from './store'

/* eslint-disable no-new */
new Vue({
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app1')
