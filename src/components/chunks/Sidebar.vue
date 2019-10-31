<template>
  <v-navigation-drawer app fixed width="320" color="white" class>
    <v-container column align-center>
      <v-flex class="d-flex" justify-center>
        <router-link to="/">
          <img :src="require(`@/${siteOption.logo}`)" alt />
        </router-link>
      </v-flex>
      <v-flex class="d-flex" justify-center>
        <v-list class="pt-4 list">
          <v-list-item v-for="(item, i) in sidebar" :key="i" :ripple="true" link :to="item.href">
            <v-list-item-content>
              <v-list-item-title class="menu-title">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-flex>
      <v-flex class="d-flex" justify-center>
        <div class="section-title mt-4">
          <h3>Свяжитесь с нами</h3>
          <div class="bar"></div>
        </div>
      </v-flex>
      <v-flex class="d-flex" justify-center>
        <v-btn
          v-for="(item, i) in siteOption.social"
          :key="i"
          fab
          color="primary--text"
          rounded
          class="ma-1 btn-social"
          small
          :to="item.href"
        >
          <v-icon>fab fa-{{ item.icon }}</v-icon>
        </v-btn>
        <!-- <v-btn fab color="black--text" rounded class="ma-1 btn-social" small>
          <v-icon>fab fa-instagram</v-icon>
        </v-btn>
        <v-btn fab color="fb--text" rounded class="ma-1 btn-social" small>
          <v-icon>fab fa-facebook-f</v-icon>
        </v-btn>
        <v-btn fab color="whats--text" rounded class="ma-1 btn-social" small>
          <v-icon>fab fa-whatsapp</v-icon>
        </v-btn>-->
      </v-flex>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({}),
  mounted() {},
  computed: {
    sidebar() {
      return this.$store.getters.sidebar;
    },
    siteOption() {
      return this.$store.getters.siteOption;
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  margin-top: 5px;
  width: 150px;
}
.wrap {
  margin-top: 50px;
  // padding-left:50px;
  // padding-right:25px;
}
.list {
  width: 100%;
  text-align: center;
}
.menu-title {
  font-size: 1em;
  text-transform: uppercase;
}
.section-title {
  margin-bottom: 5px;
  margin-top: -6px;
}
.btn-social {
  transition: 0.9s;
  &:hover,
  &:focus,
  &:active {
    transform: translateY(-5px);
  }
}
.list {
  .v-list-item {
    // font-weight: bold;
  }
}
</style>

