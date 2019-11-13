<template>
  <section id="types" class="section types">
    <v-row>
      <v-col cols="9" offset="1">
        <v-row>
          <v-col>
            <h2>{{ title }}</h2>
            <p class="mt-2" v-html="subtitle"></p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" v-for="(item, i) in cards" :key="i">
            <v-img v-if="item.img" :src="item.img" height="200px"></v-img>
            <h4 class="mt-3">{{ item.title }}</h4>
            <p>{{ item.subtitle }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data: () => ({
    title: "Размеры",
    subtitle: `
      В нашей типографии Вы можете заказать визитки любого размера, но в основной массе визитки изготовавливаются в таких вариантах:
    `,
    cards: [
      {
        id: 1,
        title: "Стандартный",
        subtitle: "Размер 90х50мм",
        img:
          "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcards%2Ftypes%2F01.jpg?alt=media&token=757b53dc-5ae1-4736-b764-2366e2242c27"
      },
      {
        id: 2,
        title: "Европейский",
        subtitle: "Размер 85х55мм",
        img:
          "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcards%2Ftypes%2F02.jpg?alt=media&token=201f7d9c-b9db-4683-87cf-110aac0a35be"
      },
      {
        id: 3,
        title: "Вырубной",
        subtitle: "Любая форма",
        img:
          "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcards%2Ftypes%2F03.jpg?alt=media&token=900ba233-d51f-46fd-afe5-5be5d69f5ec4"
      }
    ]
  })
};
</script>
<style lang="scss" scoped>
</style>

