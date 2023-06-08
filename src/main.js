import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import DemoAa from './Demo.vue'

const app = createApp(App)


app.component('DemoAa', DemoAa)

app.mount('#app')

