import Vue from "vue";
export default {
  state: {
    products: []
    // cards: [
    //   {
    //     id: 1,
    //     icon: "IconCard",
    //     title: "Визитки",
    //     subtitle: "от 2500 руб за 1000шт формата А5",
    //     href: "cards"
    //   },
    //   {
    //     id: 2,
    //     icon: "IconLeaflets",
    //     title: "Листовки",
    //     subtitle: "от 2500 руб за 1000шт формата А5",
    //     href: "leaflets"
    //   },
    //   {
    //     id: 3,
    //     icon: "IconEurobuklet",
    //     title: "Буклеты",
    //     subtitle: "от 2500 руб за 1000шт формата А5",
    //     href: "booklets"
    //   },
    //   {
    //     id: 4,
    //     icon: "IconCalendars",
    //     title: "Календари",
    //     subtitle: "от 2500 руб за 1000шт формата А5",
    //     href: "calendars"
    //   },
    //   {
    //     id: 5,
    //     icon: "IconMenu",
    //     title: "Меню",
    //     subtitle: "от 2500 руб за 1000шт формата А5",
    //     href: "menus"
    //   },
    //   {
    //     id: 6,
    //     icon: "IconKonverts",
    //     title: "Конверты",
    //     subtitle: "от 2500 руб за 1000шт формата А5",
    //     href: "envelopes"
    //   },
    //   {
    //     id: 7,
    //     icon: "IconPakets",
    //     title: "Пакеты",
    //     subtitle: "от 2500 руб за 1000шт формата А5",
    //     href: "bags"
    //   },
    //   {
    //     id: 8,
    //     icon: "IconCatalogs",
    //     title: "Каталоги",
    //     subtitle: "от 2500 руб за 1000шт формата А5",
    //     href: "catalogs"
    //   }
    // ]
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    LOAD_PRODUCTS({ commit }) {
      Vue.$db
        .collection("products")
        .orderBy("id")
        .get()
        .then(querySnapshot => {
          let products = [];
          querySnapshot.forEach(doc => {
            const data = doc.data();
            let product = {
              id: data.id,
              title: data.title,
              subtitle: data.subtitle,
              alias: data.alias,
              icon: data.icon,
              main_image: data.main_image,
              description: data.description
            };
            products.push(product);
          });
          commit("SET_PRODUCTS", products);
        })
        .catch(error => console.log(error));
    }
  },
  getters: {
    products(state) {
      return state.products;
    }
  }
};
