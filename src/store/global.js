import Vue from "vue";
export default {
  state: {
    settings: [],
    socials: []
  },
  mutations: {
    SET_SETTINGS(state, payload) {
      state.settings = payload;
    },
    SET_SOCIALS(state, payload) {
      state.socials = payload;
    }
  },
  actions: {
    LOAD_SETTINGS({ commit }) {
      var docRef = Vue.$db.collection("settings").doc("KyT9e6YY3rtUD51vuGgw");
      docRef
        .get()
        .then(function(doc) {
          if (doc.exists) {
            const data = doc.data();
            commit("SET_SETTINGS", data);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    },
    LOAD_SOCIALS({ commit }) {
      Vue.$db
        .collection("settings")
        .doc("KyT9e6YY3rtUD51vuGgw")
        .collection("social")
        .get()
        .then(querySnapshot => {
          let socials = [];
          querySnapshot.forEach(doc => {
            const data = doc.data();
            let social = {
              id: doc.id,
              name: data.name,
              link: data.link
            };
            socials.push(social);
          });
          commit("SET_SOCIALS", socials);
        })
        .catch(error => console.log(error));
    }
  },
  getters: {
    settings(state) {
      return state.settings;
    },
    socials(state) {
      return state.socials;
    }
  }
};
