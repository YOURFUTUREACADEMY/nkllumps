import { createRouter, createWebHistory } from "vue-router";
import Forms  from "../views/Forms.vue";
import Outro from "../views/Outro.vue";

const routes = [
  {
    path: "/",
    name: "Forms",
    component: Forms,
  },
  {
    path:"/Outro",
    name:"Outro",
    component:Outro,
    }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
