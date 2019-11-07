export default {
  state: {
    loader: false,
    sidebar: false,
    header: false
  },
  mutations: {
    setLoader(state, payload) {
      state.loader = payload;
    },
    setSidebar(state, payload) {
      state.sidebar = payload;
    },
    setHeader(state, payload) {
      state.header = payload;
    }
  },
  actions: {
    changeSidebar({ commit }, payload) {
      commit("setSidebar", payload);
    },
    changeHeader({ commit }, payload) {
      commit("setHeader", payload);
    }
  },
  getters: {
    loader(state) {
      return state.loader;
    },
    sidebarStatus(state) {
      return state.sidebar;
    },
    headerStatus(state) {
      return state.header;
    }
  }
};
