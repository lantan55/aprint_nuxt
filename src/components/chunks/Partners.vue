<template>
  <section class="section partners">
    <!-- TODO сделать правильную карусель. -->
    <v-container class="box">
      <div class="section-title">
        <h2>Наши постоянные клиенты</h2>
        <div class="bar"></div>
      </div>
      <v-row>
        <v-col md="2" v-for="item in brands" :key="item.id" class="pa-0">
          <img :src="`http://apprint.spb.ru/${item.img}`" :alt="item.alt" />
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
      // return this.$store.getters.BRANDS;
    }
  }
};
</script>
<style lang="scss" scoped>
.partners {
  padding: 50px 0;
  border-top: 1px solid #edf5ff;
}
img {
  // filter: grayscale(100%);
  width: 150px;
}
</style>
