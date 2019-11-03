import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);

const Home = require("./views/Home.vue").default;
const About = require("./views/About.vue").default;
const Payment = require("./views/Payment.vue").default;
const Shipment = require("./views/Shipment.vue").default;
const Requirements = require("./views/Requirements.vue").default;
const Urgent = require("./views/Urgent.vue").default;
const Faq = require("./views/Faq.vue").default;
const Contacts = require("./views/Contacts.vue").default;
const Sitemap = require("./views/Sitemap.vue").default;

// Products
const Cards = require("./views/Products/Businesscard.vue").default;

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: About, name: "about" },
  { path: "/cards", component: Cards, name: "businesscard" },
  { path: "/payment", component: Payment, name: "payment" },
  { path: "/shipment", component: Shipment, name: "shipment" },
  { path: "/requirements", component: Requirements, name: "requirements" },
  { path: "/urgent", component: Urgent, name: "urgent" },
  { path: "/faq", component: Faq, name: "faq" },
  { path: "/contacts", component: Contacts, name: "contacts" },
  { path: "/sitemap", component: Sitemap, name: "sitemap" }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 500);
    });
  }
});

export default router;
