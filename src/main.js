import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import locale from './locale';
import '@/assets/styles/main.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

const app = createApp(App)

const i18n = createI18n(locale);

app.use(router)
app.use(i18n)

app.mount('#app')
