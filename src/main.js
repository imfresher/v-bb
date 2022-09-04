import { createApp } from 'vue';
import { installI18n } from '@/utils/i18n';
import App from './App.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import router from './router';
import ElementPlus from 'element-plus';
import Draggable from 'vuedraggable';
// import BuilderBlocks from '@/components/builder/blocks/index';

import 'virtual:svg-icons-register';
import 'uno.css';
import 'element-plus/dist/index.css';
// import "element-plus/theme-chalk/index.css";
import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.component('SvgIcon', SvgIcon);
app.component('draggable', Draggable);

installI18n(app);

// app.use(BuilderBlocks);

app.mount('#app');
