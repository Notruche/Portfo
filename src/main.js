import "./assets/sass/main.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "../node_modules/bootstrap/dist/css/bootstrap.css"

createApp(App)
.use(router)
.mount('#app')

import "../node_modules/bootstrap/dist/js/bootstrap.js";