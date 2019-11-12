import Vue from "vue";
export default {
  state: {
    products: [],
    sections: [],
    product: {}
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_PRODUCT(state, payload) {
      state.product = payload;
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
          let sections = [];

          querySnapshot.forEach(doc => {
            const data = doc.data();

            let product = {
              id: data.id,
              title: data.title,
              subtitle: data.subtitle,
              alias: data.alias,
              icon: data.icon,
              main_image: data.main_image,
              description: data.description,
              bg: data.bg
            };
            products.push(product);
          });
          commit("SET_PRODUCTS", products);
        })
        .catch(error => console.log(error));
    }

    // LOAD_PRODUCT({ commit }, payload) {
    //   Vue.$db
    //     .collection("products")
    //     .doc(payload)
    //     .get()
    //     .then(doc => {
    //       if (doc.exists) {
    //         const data = doc.data();
    //         let product = {
    //           id: doc.id,
    //           title: data.title,
    //           subtitle: data.subtitle,
    //           icon: data.icon,
    //           main_image: data.main_image,
    //           description: data.description,
    //           bg: data.bg,
    //           alias: data.alias
    //         };
    //         console.log("product", product);

    //         Vue.$db
    //           .collection("products")
    //           .doc(payload)
    //           .collection("sections")
    //           .get()
    //           .then(querySnapshot => {
    //             let sections = [];
    //             querySnapshot.forEach(doc => {
    //               const data = doc.data();

    //               let section = {
    //                 name: doc.id,
    //                 id: data.id,
    //                 title: data.title,
    //                 description: data.description,
    //                 bg: data.bg
    //               };

    //               sections.push(section);
    //             });
    //             console.log("section", sections);
    //             product.sections = sections;
    //             commit("SET_PRODUCT", product);
    //             console.log(product);
    //           })
    //           .catch(error => console.log(error));
    //       }
    //     });
    // }
  },
  getters: {
    products(state) {
      return state.products;
    },
    sections(state) {
      return state.sections;
    }
  }
};
