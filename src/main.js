//imports
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@babel/polyfill";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.css";
import "@/styles/bootstrap.scss";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(fas, far, fab);

// youfa scripts
import yfa from "../node_modules/@yourfutureacademy/scripts";
import config from "@/yfaConfig";


// create app
const app = createApp(App);

// app use 
app.use(store).use(router);

// app components
app.component('font-awesome-icon', FontAwesomeIcon);

// app global variables
app.config.globalProperties.$OTAP = config.OTAP.Value;
app.config.globalProperties.$yfa = yfa;

//mount app
app.mount("#app");