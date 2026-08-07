import { createApp } from 'vue';
import App from './App.vue';

import ScrollAnimation from "./scrollA"

import './assets/main.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { MotionPlugin } from '@vueuse/motion';

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);

// Register the custom directive
app.directive('scroll-animation', ScrollAnimation);

app.use(vuetify, MotionPlugin).mount('#app');
