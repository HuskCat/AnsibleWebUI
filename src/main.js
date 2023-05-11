import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import hljs from 'highlight.js'
import VueHighlightJS from 'vue3-highlightjs'
import 'vue3-highlightjs/styles/solarized-dark.css'

import Dropdown from 'vue-simple-search-dropdown';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueHighlightJS)

app.use(Dropdown)

app.mount('#app')
