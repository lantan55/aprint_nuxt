export default {
  state: {
    loader: false,
    sidebar: false
  },
  mutations: {
    setLoader(state, payload) {
      state.loader = payload;
    },
    setSidebar(state, payload) {
      state.sidebar = payload;
    }
  },
  actions: {
    changeSidebar({ commit }, payload) {
      commit("setSidebar", payload);
    }
  },
  getters: {
    loader(state) {
      return state.loader;
    },
    sidebarStatus(state) {
      return state.sidebar;
    }
  }
};
