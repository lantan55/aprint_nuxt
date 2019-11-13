<template>
  <section id="types" class="section issues">
    <v-row>
      <v-col cols="9" offset="1">
        <v-row>
          <v-col>
            <h2>{{ title }}</h2>
            <p class="mt-2" v-if="subtitle" v-html="subtitle"></p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-img :src="main_image" :lazy-src="main_image"></v-img>
          </v-col>
          <v-col cols="6">
            <h4></h4>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data: () => ({
    title: "Технические требования",
    subtitle: `
      Мы работаем только с готовыми к печати макетами, поэтому есть ряд требований, без которых мы не можем гарантировать качественную печать Вашей продукции
    `,
    main_image:
      "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcards%2Fissues%2FcardsIssues.jpg?alt=media&token=073905d0-8af6-4d31-892e-f88ca463aed1"
  })
};
</script>
<style lang="scss" scoped>
.section.issues {
}
</style>

