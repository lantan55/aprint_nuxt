export default {
  state: {
    cards: [
      {
        id: 1,
        icon: "IconCard",
        title: "Визитки",
        subtitle: "от 2500 руб за 1000шт формата А5",
        href: "cards"
      },
      {
        id: 2,
        icon: "IconLeaflets",
        title: "Листовки",
        subtitle: "от 2500 руб за 1000шт формата А5",
        href: "leaflets"
      },
      {
        id: 3,
        icon: "IconEurobuklet",
        title: "Буклеты",
        subtitle: "от 2500 руб за 1000шт формата А5",
        href: "booklets"
      },
      {
        id: 4,
        icon: "IconCalendars",
        title: "Календари",
        subtitle: "от 2500 руб за 1000шт формата А5",
        href: "calendars"
      },
      {
        id: 5,
        icon: "IconMenu",
        title: "Меню",
        subtitle: "от 2500 руб за 1000шт формата А5",
        href: "menus"
      },
      {
        id: 6,
        icon: "IconKonverts",
        title: "Конверты",
        subtitle: "от 2500 руб за 1000шт формата А5",
        href: "envelopes"
      },
      {
        id: 7,
        icon: "IconPakets",
        title: "Пакеты",
        subtitle: "от 2500 руб за 1000шт формата А5",
        href: "bags"
      },
      {
        id: 8,
        icon: "IconCatalogs",
        title: "Каталоги",
        subtitle: "от 2500 руб за 1000шт формата А5",
        href: "catalogs"
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    cards(state) {
      return state.cards;
    }
  }
};
