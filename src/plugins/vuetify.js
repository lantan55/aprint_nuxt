// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader

import Vue from "vue";
import Vuetify from // VRating, // VCard, // VIcon,
// VToolbar,
"vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  global: {
    ripples: false
  },
  icons: {
    iconfont: "fa",
    values: {
      phone: "fas fa-ban",
      menu: "fas fa-ellipsis-v"
    }
  },
  theme: {
    themes: {
      light: {
        primary: "#038C65",
        secondary: "#D93030",
        yellow: "#F2E205",
        accent: "#8c9eff",
        error: "#b71c1c",
        white: "#ffffff",
        black: "#404040",
        gray: "#B0BEC5",
        vk: "#4B739D",
        fb: "#27368D",
        inst: "",
        whats: "#01CD00",
        anchor: "#D93030"
      }
    },
    options: {
      customProperties: true
    }
  }
});
