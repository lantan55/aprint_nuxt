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
import Description from "@/components/products_sections/CardsDescription";
import Types from "@/components/products_sections/CardsTypes";
import Options from "@/components/products_sections/CardsOptions";
import Issues from "@/components/products_sections/CardsIssues";
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

