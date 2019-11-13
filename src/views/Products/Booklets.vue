<template>
  <div>
    <Description />
    <Types />
    <Options />
    <Issues />
    <Feedback />
  </div>
</template>

<script>
import Description from "@/components/products_sections/BookletsDescription";
import Types from "@/components/products_sections/BookletsTypes";
import Options from "@/components/products_sections/BookletsOptions";
import Issues from "@/components/products_sections/BookletsIssues";
import Feedback from "@/components/chunks/Feedback";

export default {
  components: {
    Description,
    Types,
    Options,
    Issues,
    Feedback
  },
  data: () => ({}),
  mounted() {},

  computed: {}
};
</script>
<style lang="scss" scoped>
</style>

