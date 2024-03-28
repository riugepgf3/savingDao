import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import "./assets/css/swiper-bundle.min.css"
import './assets/css/base.css';
import './assets/css/common.css';
import './assets/css/mobile.css';

const app = createApp(App);
app.use(router);
app.mount('#app');


