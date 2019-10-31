import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

import global from "./global";
import sidebar from "./sidebar";
import cards from "./cards";
// import common from './common';
// import user from './user';
// import travels from './travels';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    sidebar,
    cards
  }
});
