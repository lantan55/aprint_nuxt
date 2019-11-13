<template>
  <section id="types" class="section options">
    <v-row>
      <v-col cols="9" offset="1">
        <v-row>
          <v-col>
            <h2>{{ title }}</h2>
            <p class="mt-2" v-if="subtitle" v-html="subtitle"></p>
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
    title: "Дополнительная обработка",
    subtitle: `
      Печать не всегда является завершающим этапом в полиграфии. Вам может потребоваться дополнительная обработка, которая позволит защитить изделие от повреждений, придать ему эксклюзивный вид и выделиться на фоне остальных. Ниже представлены виды обработки, которые может выполнить наша типография
    `,
    cards: [
      {
        id: 1,
        title: "Биговка",
        subtitle:
          "Создание углубления на изделии во избежании растрескивания при сгибе. Требуется плотность бумаги ни меньше 170 гр",
        img:
          "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fleaflets%2Foprions%2Fscoring.jpg?alt=media&token=87694a5c-f868-449f-8220-97a065f0a8bb"
      },
      {
        id: 2,
        title: "Фальцовка",
        subtitle: "Операция складывание листа бумаги",
        img:
          "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fleaflets%2Foprions%2Ffolding.jpg?alt=media&token=4243000c-ce99-46f3-9c39-d1e8cab59b8f"
      },
      {
        id: 3,
        title: "Перфорация",
        subtitle: "Процесс нанесения надсечек, формирующих линию отрыва",
        img:
          "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fleaflets%2Foprions%2Fleaflets_perforation.jpg?alt=media&token=22a87037-4b98-4d0d-a8c8-eec850d69032"
      },
      {
        id: 4,
        title: "Ламинация",
        subtitle:
          "Нанесение на поверхность изделия полимерной плёнки для защиты и придания матового или глянцевого эффекта",
        img:
          "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fleaflets%2Foprions%2Fleaflets_lamination.jpg?alt=media&token=a3382fe7-2864-4d65-808a-ba7f6795df75"
      },
      {
        id: 5,
        title: "Вырубка",
        subtitle:
          "Процесс вырезания изделия из уже отпечатанного листа при помощи специального фигурного (вырубного) штампа",
        img:
          "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fleaflets%2Foprions%2Fleaflets_cut.jpg?alt=media&token=72f5b9cd-38b7-46db-ae88-ccdb445d0a29"
      },
      {
        id: 6,
        title: "УФ лак",
        subtitle:
          "Процесс нанесения лака на поверхность полиграфической продукции",
        img:
          "https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fleaflets%2Foprions%2Fleaflets_uv.jpg?alt=media&token=0c4c9a80-7eea-468f-9340-1ac3844aeb72"
      }
    ]
  })
};
</script>
<style lang="scss" scoped>
.section.options {
  background-color: #edf5ff;
}
</style>

