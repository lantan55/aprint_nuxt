// import Vue from "vue";
// import Vuex from "vuex";
// import Axios from "axios";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     cards: {},
//     brands: {}
//   },
//   getters: {
//     CARDS: state => {
//       return state.cards;
//     },
//     BRANDS: state => {
//       return state.brands;
//     }
//   },
//   mutations: {
//     SET_CARDS: (state, payload) => {
//       state.cards = payload;
//     },
//     SET_BRANDS: (state, payload) => {
//       state.brands = payload;
//     }
//   },
//   actions: {
//     GET_CARDS: async (context, payload) => {
//       let { data } = await Axios.get("http://apprint.spb.ru/rest/cards");
//       context.commit("SET_CARDS", data.results);
//     },
//     GET_BRANDS: async (context, payload) => {
//       let { data } = await Axios.get("http://apprint.spb.ru/rest/brands");
//       context.commit("SET_BRANDS", JSON.parse(data.results[0].item));
//     }
//   }
// });
