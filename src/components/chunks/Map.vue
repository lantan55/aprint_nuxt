<template>
  <section class="section map">
    <v-layout class="wrap">
      <div id="map" style="width: 100%; height: 400px"></div>
      <!-- <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Adaf2561705070f78e624f29b89600a474ba35648532fee3a94d10f777730d734&amp;source=constructor" width="100%" height="480" frameborder="0"></iframe> -->
      <v-card class="mx-auto desc" max-width="400" tile color="primary">
        <v-list two-line disabled color="primary">
          <v-subheader>Контакты</v-subheader>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>8 812 994-16-47</v-list-item-title>
                <v-list-item-title>info@apprint.ru</v-list-item-title>
                <v-list-item-subtitle>Приём заказов - круглосуточно</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  Санкт-Петербург,
                  <br />ул. Бассейная, д. 21
                </v-list-item-title>
                <v-list-item-subtitle>Работа офиса с 9-00 до 18-00</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-layout>
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
.map {
  padding-bottom: 0;
}
img {
  filter: grayscale(100%);
}
.wrap {
  position: relative;
  // border: 6px solid var(--v-primary-base);
  width: calc(100% - 21px);
  overflow: hidden;
  margin: 15px;
  .desc {
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 50px;
    bottom: 0;
    width: 400px;
    margin: 15px 15px 15px 15px;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    padding: 30px;
    .v-subheader {
      font-size: 22px;
      color: var(--v-white-base);
    }
    .v-list-item__title {
      font-size: 18px;
      color: var(--v-white-base);
      font-weight: bold;
    }
    .v-list-item__subtitle {
      font-size: 16px;
      color: var(--v-white-darken2);
    }
  }
}
</style>
