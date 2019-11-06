<template>
  <section class="section partners">
    <!-- TODO сделать правильную карусель. -->
    <v-container class="box">
      <div class="section-title">
        <h2>Наши постоянные клиенты</h2>
        <div class="bar"></div>
      </div>
      <v-row justify="center">
        <v-col
          md="2"
          cols="4"
          v-for="(item, i) in brands"
          :key="i"
          class="d-flex justify-center pa-0"
        >
          <img :src="require(`@/${item.img}`)" :alt="item.title" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  components: {},
  mounted() {
    // JSON.stringify(this.$store.dispatch('GET_BRANDS'));
  },
  computed: {
    brands() {
      return this.$store.getters.brands;
    }
  }
};
</script>
<style lang="scss" scoped>
.partners {
  background-image: url("../../assets/img/bg/bg2.png");
  background-repeat: repeat;
  background-position: left top;

  padding: 50px 30px;
  @media screen and (max-width: 600px) {
    padding: 15px 15px;
  }
  border-top: 1px solid #edf5ff;
  background-color: #fff;
}
img {
  filter: grayscale(100%);
  width: 100px;
  @media screen and (max-width: 600px) {
    width: 50px;
  }
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    filter: grayscale(0);
  }
}
</style>
