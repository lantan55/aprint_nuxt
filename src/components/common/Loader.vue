<template>
  <v-overlay opacity="1" color="white" :value="loader">
    <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
  </v-overlay>
</template>
<script>
export default {
  components: {},
  mounted() {
    // JSON.stringify(this.$store.dispatch('GET_BRANDS'));
  },
  computed: {
    loader() {
      return this.$store.getters.loader;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
