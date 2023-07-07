import { createRouter, createWebHistory } from 'vue-router';

import WeatherWidget from '../components/WeatherWidget.vue';
import LocationWidget from '../components/LocationWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';
import MthWidget from '../components/MthWidget.vue';
import PhotoWidget from '../components/PhotoWidget.vue';

const routes = [
  { path: '/', component: WeatherWidget },
  { path: '/location', component: LocationWidget },
  { path: '/stopwatch', component: StopwatchWidget },
  { path: '/mth', component: MthWidget },
  { path: '/photo', component: PhotoWidget },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;