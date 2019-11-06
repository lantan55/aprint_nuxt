<template>
  <div>
    <section class="requirements page section">
      <v-row>
        <v-col cols="10" offset="1">
          <v-container>
            <h1>{{page.title}}</h1>
            <p
              class="mt-4"
            >Для изготовления качественного изделия, Вам следует при разработке макета учитывать несколько важных моментов:</p>
            <v-row class="elevation-1 pa-4 my-4">
              <v-col cols="12" class="d-flex justify-start">
                <h4>1. Размер макета</h4>
              </v-col>
              <v-col cols="6">
                <ul>
                  <li>Размер листа должен быть равен послеобрезному формату.</li>
                  <li>Например, визитка 90х50мм не должна размещаться на листе А4. Оборот должен находиться на следующем листе.</li>
                  <li>На макет с последующей вырубкой должен быть наложен контур вырубного штампа (на отдельном слое).</li>
                </ul>
              </v-col>
              <v-col cols="6"></v-col>
            </v-row>
            <v-row class="elevation-1 pa-4 my-4">
              <v-col cols="12" class="d-flex justify-start">
                <h4>2. Вылеты под обрез</h4>
              </v-col>
              <v-col cols="6">
                <v-img
                  contain
                  :src="require(`@/assets/img/requirements/trebovania-k-maketam-vizitki.jpg`)"
                  :lazy-src="require(`@/assets/img/requirements/trebovania-k-maketam-vizitki.jpg`)"
                  aspect-ratio="1"
                  max-width="500"
                  max-height="300"
                />
              </v-col>
              <v-col cols="6">
                <ul>
                  <li>Фон макета должен выходить не менее чем на 2мм за обрезное поле</li>
                  <li>В макете не должно быть рамки по линии реза</li>
                  <li>Внутренние элементы и текст должны находиться не ближе 3мм от линии реза</li>
                </ul>
              </v-col>
            </v-row>
            <v-row class="elevation-1 pa-4 my-4">
              <v-col cols="12" class="d-flex justify-start">
                <h4>3. Размер макета</h4>
              </v-col>
              <v-col cols="6">
                <ul>
                  <li>Размер листа должен быть равен послеобрезному формату.</li>
                  <li>Например, визитка 90х50мм не должна размещаться на листе А4. Оборот должен находиться на следующем листе.</li>
                  <li>На макет с последующей вырубкой должен быть наложен контур вырубного штампа (на отдельном слое).</li>
                </ul>
              </v-col>
              <v-col cols="6"></v-col>
            </v-row>
            <v-row class="elevation-1 pa-4 my-4">
              <v-col cols="12" class="d-flex justify-start">
                <h4>4. Размер макета</h4>
              </v-col>
              <v-col cols="6">
                <ul>
                  <li>Размер листа должен быть равен послеобрезному формату.</li>
                  <li>Например, визитка 90х50мм не должна размещаться на листе А4. Оборот должен находиться на следующем листе.</li>
                  <li>На макет с последующей вырубкой должен быть наложен контур вырубного штампа (на отдельном слое).</li>
                </ul>
              </v-col>
              <v-col cols="6"></v-col>
            </v-row>

            <p>
              Для удобства, Вы можете скачать наши требования к макетам по
              <a href="#">ссылке</a>
            </p>
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
.requirements {
  ul {
    padding-left: 0;
    li {
      position: relative;
      margin-bottom: 15px;
      padding-left: 30px;
      list-style-type: none;
      font-size: 1.3em;
      color: var(--v-gray-base);
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 6px;
        width: 17px;
        height: 17px;
        background: var(--v-primary-base);
        -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      }
    }
  }
}
</style>

