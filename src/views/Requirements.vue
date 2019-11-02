<template>
  <div>
    <section class="payment page section">
      <v-container>
        <v-flex md8>
          <h1>{{page.title}}</h1>
          <h4>Работаем по 100% предоплате.</h4>
          <p>Просим относиться к этому с пониманием, т.к. отпечатанная продукция по Вашему макету носит строго индивидуальный характер. Если вдруг Вы передумаете забирать изготовленную продукцию после утверждения запуска в печать, то мы не сможем её никуда больше реализовать и данный заказ станет убыточным, не говоря о потраченном зря времени и менеджера, и печатника.</p>
          <h4>Безналичный расчёт</h4>
          <p>После оформления заказа будет сформирован счёт на оплату. Денежные средства поступят на наш счёт в течение 1-2 рабочих дней после оплаты заказа. Оплата заказов клиентами - юридическими лицами возможна только по безналичному расчёту. Все необходимые для бухгалтерии документы (оригинал счёта на оплату, счёт-фактура, накладная) выдаются вместе с заказом при получении.</p>
        </v-flex>
      </v-container>
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
    this.$store.dispatch("getPage", 5);
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

