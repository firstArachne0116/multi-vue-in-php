import Vue from 'vue'
import Component1 from '@/components/App2';
import store from '@/store'

/* eslint-disable no-new */
new Vue({
  store,
  components: { App2 },
  render: h => h(App)
}).$mount('#app1')
