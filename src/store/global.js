export default {
  state: {
    siteOption: {
      siteName: "Типография Апрель",
      logo: "assets/img/logo_aprel.svg",
      phoneBase: "8 812 994-16-47",
      phoneAdd: "",
      mailBase: "info@apprint.ru",
      mailAdd: "",
      address: "ул. Бассейная, д. 21",
      addressDesc: "5 этаж, офис 502",
      social: [
        {
          icon: "vk",
          href: "vk.com"
        },
        {
          icon: "instagram",
          href: "vk.com"
        },
        {
          icon: "facebook-f",
          href: "vk.com"
        },
        {
          icon: "whatsapp",
          href: "vk.com"
        }
      ]
    }
  },
  mutations: {
    setSiteOption(state, payload) {
      state.setSiteOption = payload;
    }
  },
  actions: {},
  getters: {
    siteOption(state) {
      return state.siteOption;
    }
  }
};
