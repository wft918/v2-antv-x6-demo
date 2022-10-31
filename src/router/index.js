import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: resolve => require(['../views/index.vue'], resolve),
  },
  {
    path: "/flow-x6",
    name: "flow-x6",
    component: resolve => require(['../views/flow-x6/index.vue'], resolve),
  }
]

const router = new VueRouter({
  routes,
});

export default router;
