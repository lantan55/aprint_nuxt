import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

import common from "./common";
import global from "./global";
import sidebar from "./sidebar";
import products from "./products";
import brands from "./brands";
import pages from "./pages";
// import common from './common';
// import user from './user';
// import travels from './travels';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    global,
    sidebar,
    products,
    brands,
    pages
  }
});
