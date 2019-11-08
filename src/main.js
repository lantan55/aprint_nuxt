import Vue from "vue";
import store from "./store";
import router from "./router";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import firebase from "firebase/app";
import "firebase/database";
// import "firebase/firebase";
import "firebase/firestore";
import firebaseConfig from "./configs/firebaseConfig";

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

Vue.$db = db;

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
  created() {
    this.$store.dispatch("LOAD_PRODUCTS");
    this.$store.dispatch("LOAD_SETTINGS");
    this.$store.dispatch("LOAD_SOCIALS");
  }
}).$mount("#app");
