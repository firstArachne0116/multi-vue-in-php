import Vue from 'vue'
import Component1 from '@/components/App1';
import store from '@/store'

/* eslint-disable no-new */
new Vue({
  store,
  components: { App1 },
  render: h => h(App)
}).$mount('#app2')
