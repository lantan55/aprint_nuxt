<template>
  <section class="product leaflets section" :style="{'background-image': `url(${bg})`} ">
    <v-row>
      <v-col cols="9" offset="1">
        <v-row justify="space-between">
          <v-col cols="12">
            <h1>{{title}}</h1>
          </v-col>
          <v-col cols="7">
            <p class="black--text" v-html="subtitle"></p>
            <button class="btn btn-primary">Сделать заказ</button>
          </v-col>
          <v-col cols="4">
            <v-img
              :src="main_image"
              :lazy-src="main_image"
              aspect-ratio="1"
              max-width="500"
              max-height="300"
              contain
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data: () => ({
    title: "Печать листовок",
    subtitle: `
      Этот вид полиграфии в основном используется для массовой раздачи и печатается большими тиражами. Имеет смысл печатать от 1000 штук и больше, если только Вы не рассчитываете на определённое небольшое количество людей, которым планируете вручать раздаточные материалы. Листовки чаще всего имеют стандартные размеры А6, А5, А4 и евро (210х98мм) и печатаются на мелованной бумаге плотность 130 или 170 гр/м. Также мы всегда можем предложить и нестандартное исполнение листовок – более плотную бумаги или дизайнерскую, дополнительную декоративную отделку, перфорацию для лёгкого отделения части листовки.
      <br />
      Для примера – 1000 двухсторонних листовок А5 на мелованной бумаге 170 гр/м. будут стоить 3000 рублей. 100 двухсторонних евро-сертификатов на белоснежной бумаге 300 гр – 1000 рублей.
    `,
    main_image:
      "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fleaflets%2Fleaflets_1.png?alt=media&token=236e33ea-923b-40a3-9506-21fae4e9db23",
    bg:
      "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbg%2Fleaflets.png?alt=media&token=8bbbf034-ba62-4cec-b5fe-eaffeb4438d5"
  })
};
</script>
<style lang="scss" scoped>
.section.product.leaflets {
  background-repeat: repeat;
  background-position: left top;
  p {
    text-align: justify;
  }
}
</style>

