export default {
  state: {
    pages: [
      {
        id: 1,
        title: "Главная",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at. ",
        mainCover: "assets/img/content/covers/1.png"
      },
      {
        id: 2,
        title: "О типографии",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at. ",
        mainCover: "assets/img/content/covers/1.png"
      },

      {
        id: 3,
        title: "Оплата",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at. ",
        mainCover: "assets/img/content/covers/1.png"
      },
      {
        id: 4,
        title: "Доставка",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at. ",
        mainCover: "assets/img/content/covers/1.png"
      },
      {
        id: 5,
        title: "Тех. требования",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at. ",
        mainCover: "assets/img/content/covers/1.png"
      },
      {
        id: 6,
        title: "Срочная печать",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at. ",
        mainCover: "assets/img/content/covers/1.png"
      },
      {
        id: 7,
        title: "Контакты",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at. ",
        mainCover: "assets/img/content/covers/1.png"
      },
      {
        id: 8,
        title: "Визитки",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at. ",
        mainCover: "assets/img/content/covers/1.png"
      }
    ],
    page: {}
  },
  mutations: {
    setPage(state, payload) {
      state.page = state.pages.filter(items => {
        return items.id == payload;
      });
    }
  },
  actions: {
    async getPage({ commit }, payload) {
      await commit("setLoader", true);
      try {
        await commit("setPage", payload);
      } catch (error) {
        console.log("OOPS! Page not found", error);
        await commit("setLoader", true);
        throw error;
      }
      setTimeout(() => {
        commit("setLoader", false);
      }, 500);
    }
  },
  getters: {
    pages(state) {
      return state.pages;
    },
    page(state) {
      return state.page;
    }
  }
};
