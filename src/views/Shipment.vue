<template>
  <div>
    <section class="payment page section">
      <v-row>
        <v-col cols="10" offset="1">
          <v-container>
            <v-flex md8>
              <h1>{{page.title}}</h1>
              <p>Уважаемые клиенты и партнёры! Мы готовы выполнить доставку Вашего заказа в кратчайшие сроки с момента изготовления тиража. Заказ может быть доставлен в удобное для Вас время по указанному адресу. Стандартные условия доставки - на следующий день после готовности заказа. Если Вам требуется доставка в регионы, то воспользуемся услугами выбранной Вами транспортной компании.</p>
              <h4>Бесплатно</h4>
              <p>
                При заказе от 10 000 руб. доставка по городу бесплатная.
                Доставка осуществляется на следующий рабочий день после готовности заказа.
              </p>
              <h4>Доставка в пределах КАД</h4>
              <p>
                Для заказов стоимостью до 10 000 руб. стоимость доставки составляет 500 руб.
                Доставка осуществляется на следующий рабочий день после готовности заказа.
              </p>
              <h4>Доставка за КАД</h4>
              <p>
                От 1000 руб. Точную стоимость уточняйте у менеджера.
                Доставка осуществляется на следующий рабочий день после готовности заказа.
              </p>
              <h4>Самовывоз заказов</h4>
              <p>Осуществляется из офиса типографии «Апрель», по адресу: Санкт-Петербург, м. Парк Победы, ул. Бассейная, д. 21, офис 502. График работы офиса: 10:00-18:00 по будням.</p>
              <h4>Срочная доставка</h4>
              <p>Возможность срочной доставки оговаривается с менеджером в каждом конкретном случае. Отправляем на такси за счет заказчика по факту готовности заказа или к конкретному времени.</p>
            </v-flex>
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
    this.$store.dispatch("getPage", 4);
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

