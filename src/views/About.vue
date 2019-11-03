<template>
  <div>
    <section class="payment page section">
      <v-row>
        <v-col cols="10" offset="1">
          <v-container>
            <h1>{{page.title}}</h1>

            <p>Наша типография «Апрель» создавалась в 2011 году по высоким стандартам и требованиям, поэтому современное и своевременно обновляющееся полиграфическое оборудование позволяет оперативно выпускать широкий ассортимент продукции. Мы оказываем услуги по изготовлению качественной печатной продукции 24 часа в сутки, 7 дней в неделю! Мы умеем оптимизировать временные и финансовые затраты наших клиентов без ущерба качеству. Благодаря своей круглосуточной работе, не раз за это время выручали в критических ситуациях наших заказчиков.</p>
            <p>
              Среди наших постоянных заказчиков такие известные компании как «Петербургская недвижимость» и «Сэтл Сити», «Грузовичков» и гостиница «Азимут», сети магазинов «US Polo» и «Лемуррр», «LUMENE» и многие другие.
              В своих расчётах мы используем полиграфический калькулятор, где учитывается множество параметров заказа (от тиража до сроков изготовления). Индивидуальный расчёт заказа позволяет предлагать заказчикам оптимальное соотношение цены, качества и сроков. Стандартные сроки изготовления составляют 2-3 рабочих дня, при необходимости, практически всегда, есть возможность выполнить небольшой заказ в день обращения. Если же на производстве имеется большая загрузка, то мы всегда Вас заранее предупредим о возможном увеличении сроков изготовления относительно стандартных.
            </p>

            <h4>Схема работы</h4>
            <v-timeline dense>
              <v-timeline-item fill-dot color="red" icon="fas fa-envelope-open-text">
                <h5>Запрос</h5>
                <p>Отправляете запрос на почту или через форму на сайте с описанием заказа</p>
              </v-timeline-item>
              <v-timeline-item fill-dot color="orange" icon="far fa-handshake">
                <h5>Согласование макета</h5>
                <p>Отправляете нам макет на проверку</p>
              </v-timeline-item>
              <v-timeline-item fill-dot color="blue" icon="fas fa-hand-holding-usd">
                <h5>Оплата</h5>
                <p>Оплачиваете заказ удобным для Вас способом.</p>
              </v-timeline-item>
              <v-timeline-item fill-dot icon="far fa-images">
                <h5>Готовый заказ</h5>
                <p>Забираете у нас в офисе или оформляете доставку</p>
              </v-timeline-item>
            </v-timeline>
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
    this.$store.dispatch("getPage", 2);
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

