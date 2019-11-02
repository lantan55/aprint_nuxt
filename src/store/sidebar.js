export default {
  state: {
    sidebarMenu: [
      {
        icon: "cards",
        title: "Визитки",
        href: "cards"
      },
      {
        icon: "leaflets",
        title: "Листовки",
        href: "leaflets"
      },
      {
        icon: "booklets",
        title: "Буклеты",
        href: "booklets"
      },
      {
        icon: "calendars",
        title: "Календари",
        href: "calendars"
      },
      {
        icon: "menu",
        title: "Меню",
        href: "menu"
      },
      {
        icon: "envelopes",
        title: "Конверты",
        href: "envelopes"
      },
      {
        icon: "pockets",
        title: "Пакеты",
        href: "pockets"
      },
      {
        icon: "catalogs",
        title: "Каталоги",
        href: "catalogs"
      },
      {
        icon: "other",
        title: "Прочие услуги",
        href: "other"
      }
    ],
    mainMenu: [
      {
        title: "Главная",
        href: "/"
      },
      {
        title: "О типографии",
        href: "about"
      },
      {
        title: "Оплата",
        href: "payment"
      },
      {
        title: "Тех. требования",
        href: "requirements"
      },
      {
        title: "Доставка",
        href: "shipment"
      },
      {
        title: "Срочная печать",
        href: "/urgent"
      },
      {
        title: "FAQ",
        href: "/faq"
      },
      {
        title: "Контакты",
        href: "/contacts"
      },
      {
        title: "Карта сайта",
        href: "/sitemap"
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    // sidebar(state) {
    //   return state.sidebarMenu;
    // },
    mainMenu(state) {
      return state.mainMenu;
    }
  }
};
