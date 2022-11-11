import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const _import = require('./import-' + process.env.NODE_ENV)

const routes = [
  {
    path: "/",
    name: "index",
    component: _import('index.vue'),
  },
  {
    path: "/flow-x6",
    name: "flow-x6",
    component: _import('flow-x6/index.vue'),
  }
]

const router = new VueRouter({
  routes,
});

export default router;
