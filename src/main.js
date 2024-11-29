import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");

// import { createRouter, createWebHistory} from "vue-router"

// const router = createRouter({
//     history: createWebHistory,
//     routes: [{
//         path:
//     }]

// })
