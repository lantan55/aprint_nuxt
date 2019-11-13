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
    title: "Печать визиток",
    subtitle: `
      Обычно они бывают двух стандартных размеров 90х50 мм и 85х55 и печатаются на мелованном картоне 300гр. Для обозначения особого статуса, можно изготовить визитки на дизайнерском картоне с различными фактурами и визуальными эффектами, защитить поверхность ламинацией, сделать нанесение объёмным лаком, золотом или серебром, придать при помощи вырубки форму, отличную от стандартного прямоугольника.
      <br />
      Стандартный же комплект из 100 двухсторонних визиток 90х50 мм на мелованном картоне будут стоить 400 рублей. 1000 визиток (одинаковых) – 1200 рублей.
    `,
    main_image:
      "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fmain%2Fcards.png?alt=media&token=a46c7c16-df26-4498-bcc0-8a33aca2bbb4",
    bg:
      "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbg%2Fcards.png?alt=media&token=b727cf04-8c7c-4781-aefc-1d1f15971ff8"
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

