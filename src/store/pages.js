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
        title: "",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at. ",
        mainCover: "assets/img/content/covers/1.png"
      },
      {
        id: 8,
        title: "Визитки",
        description: `
                Обычно они бывают двух стандартных размеров 90х50 мм и 85х55 и печатаются на мелованном картоне 300гр. Для обозначения особого статуса, можно изготовить визитки на дизайнерском картоне с различными фактурами и визуальными эффектами, защитить поверхность ламинацией, сделать нанесение объёмным лаком, золотом или серебром, придать при помощи вырубки форму, отличную от стандартного прямоугольника.
                <br/>
                Стандартный же комплект из 100 двухсторонних визиток 90х50 мм на мелованном картоне будут стоить 400 рублей. 1000 визиток (одинаковых) – 1200 рублей.
                `,
        mainCover: "assets/img/covers/cards.png",
        types: {
          title: "Размеры",
          description:
            "В нашей типографии Вы можете оформить заказ в стандартные сроки изготовления с оптимальным соотнешнием цены и сроков, так и срочный заказ",
          typesCards: [
            {
              title: "Стандартный",
              subtitle: "Размер 90х50мм",
              img: "assets/img/sections/types/01.jpg"
            },
            {
              title: "Европейский",
              subtitle: "Размер 85х55мм",
              img: "assets/img/sections/types/02.jpg"
            },
            {
              title: "Вырубной",
              subtitle: "Любая форма",
              img: "assets/img/sections/types/03.jpg"
            }
          ]
        }
      },
      {
        id: 9,
        title: "Контакты",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at. ",
        mainCover: "assets/img/covers/01.png"
      },
      {
        id: 10,
        title: "FAQ",
        description: "Страница находится в разработке",
        mainCover: "assets/img/covers/01.png"
      },
      {
        id: 11,
        title: "Листовки",
        description: "Страница находится в разработке",
        mainCover: "assets/img/covers/01.png"
      },
      {
        id: 12,
        title: "Буклеты",
        description: "Страница находится в разработке",
        mainCover: "assets/img/covers/01.png"
      },
      {
        id: 13,
        title: "Календари",
        description: "Страница находится в разработке",
        mainCover: "assets/img/covers/01.png"
      },
      {
        id: 14,
        title: "Меню",
        description: "Страница находится в разработке",
        mainCover: "assets/img/covers/01.png"
      },
      {
        id: 15,
        title: "Конверты",
        description: "Страница находится в разработке",
        mainCover: "assets/img/covers/01.png"
      },
      {
        id: 16,
        title: "Пакеты",
        description: "Страница находится в разработке",
        mainCover: "assets/img/covers/01.png"
      },
      {
        id: 17,
        title: "Каталоги",
        description: "Страница находится в разработке",
        mainCover: "assets/img/covers/01.png"
      }
    ],
    page: {}
  },
  mutations: {
    setPage(state, payload) {
      state.page = state.pages.filter(items => {
        return items.id == payload;
      });
    },
    clearPage(state) {
      state.page = {};
    }
  },
  actions: {
    async getPage({ commit }, payload) {
      // commit("clearPage");
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
