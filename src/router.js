import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = require("./views/Home.vue").default;

// Products
const Cards = require("./views/Products/Businesscard.vue").default;

const routes = [
  { path: "/", component: Home, name: "home" },

  { path: "/cards", component: Cards, name: "businesscard" }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    setTimeout(() => {
      return { x: 0, y: 0 };
    }, 0);
    return {};
  }
});

export default router;
