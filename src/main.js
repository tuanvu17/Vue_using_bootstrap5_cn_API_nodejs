import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Swal from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
app.use(VueAxios, {$request:axios})
app.use(Swal);
app.use(router).mount('#app')
