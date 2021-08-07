import { createApp } from 'vue'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import router from './router'
import store from './store/index'


import App from './App.vue'




// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery'
import 'popper.js'
import '@popperjs/core'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import BaseCard from './components/ui/BaseCard'
import BaseButton from './components/ui/BaseButton'


const app = createApp(App)

// app.use(BootstrapVue)
// app.use(BootstrapVueIcons)

app.use(router)
app.use(store)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)

app.mount('#app')
