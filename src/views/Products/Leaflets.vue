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
import Description from "@/components/products_sections/LeafletsDescription";
import Types from "@/components/products_sections/LeafletsTypes";
import Options from "@/components/products_sections/LeafletsOptions";
import Issues from "@/components/products_sections/LeafletsIssues";
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

