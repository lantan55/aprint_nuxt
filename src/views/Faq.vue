<template>
  <div>
    <section class="requirements page section">
      <v-row>
        <v-col cols="10" offset="1">
          <v-container>
            <h1>{{page.title}}</h1>
            <p class="mt-4">{{page.description}}</p>
          </v-container>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
// import Loader from '@/components/Loader'
// import MainBanner from "@/components/chunks/MainBanner";
// import MainCards from "@/components/chunks/MainCards";
// import Feedback from "@/components/chunks/Feedback";
// import Partners from "@/components/chunks/Partners";
// import Map from "@/components/chunks/Map";

export default {
  components: {
    //   Loader,
    // MainBanner,
    // MainCards,
    // Feedback,
    // Partners,
    // Map
  },
  data: () => ({}),
  mounted() {
    this.$store.dispatch("getPage", 10);
  },

  computed: {
    page() {
      return this.$store.getters.page[0];
    },
    status() {
      // return this.$store.getters.LOADING;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

