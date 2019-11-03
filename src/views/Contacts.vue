<template>
  <div>
    <section class="section page contacts">
      <v-row>
        <v-col cols="10" offset="1">
          <v-row>
            <v-col cols="6">
              <h1>{{page.title}}</h1>
              <p class="mt-4">{{ page.description }}</p>
            </v-col>
            <v-col cols="6">
              <v-img
                :src="require(`@/${page.mainCover}`)"
                :lazy-src="require(`@/${page.mainCover}`)"
                aspect-ratio="1"
                max-width="500"
                max-height="300"
                contain
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section class="section contacts contacts-list">
      <v-row>
        <v-col cols="10" offset="1">
          <v-row justify="center">
            <v-col lg="4" xs="2" v-for="(item, i) in cards" :key="i">
              <div class="single-services d-flex flex-column align-center justify-center">
                <v-btn class="icon" outlined fab elevation="0" icon color="primary" x-large>
                  <v-icon class>{{item.icon}}</v-icon>
                </v-btn>
                <h4 class>{{ item.title }}</h4>
                <a href="#">{{ item.href }}</a>
                <a v-if="item.href1" href="#">{{ item.href1 }}</a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section class="section contacts">
      <v-row>
        <v-col cols="10" offset="1">
          <v-row>
            <v-col cols="6">
              <v-card class="feedback-box pa-6" elevation="1">
                <h2 class="text-center py-2">Свяжитесь с нами</h2>
                <form @submit.prevent="onSubmit" class>
                  <v-text-field
                    filled
                    color="primary"
                    clearable
                    outlined
                    label="Имя"
                    :prepend-icon="this.$vuetify.breakpoint.smAndDown ?  false : 'fas fa-id-badge' "
                    type="text"
                    v-model="name"
                    :error-messages="nameErrors"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>

                  <v-text-field
                    filled
                    color="primary"
                    clearable
                    outlined
                    ref="order_email"
                    label="Email"
                    :prepend-icon="this.$vuetify.breakpoint.smAndDown ?  false : 'fas fa-envelope' "
                    type="email"
                    v-model="email"
                    :error-messages="emailErrors"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                  <v-text-field
                    v-model="phone"
                    filled
                    color="primary"
                    clearable
                    outlined
                    label="Телефон"
                    :prepend-icon="this.$vuetify.breakpoint.smAndDown ?  false : 'fas fa-phone' "
                    type="phone"
                    :error-messages="phoneErrors"
                    required
                    @input="$v.phone.$touch()"
                    @blur="$v.phone.$touch()"
                  ></v-text-field>
                  <!-- <v-file-input
            :show-size="1000"
            small-chips
            outlined
            multiple
            label="Загрузить макет"
            value
                  ></v-file-input>-->
                  <v-textarea
                    v-model="text"
                    outlined
                    label="Запрос"
                    rows="5"
                    :prepend-icon="this.$vuetify.breakpoint.smAndDown ?  false : 'far fa-comment-dots' "
                  ></v-textarea>
                  <p>
                    Нажимая на кнопку "Отправить", Вы соглашаетесь с
                    <a
                      href="https://policies.google.com/privacy"
                    >политикой конфиденциальности</a>
                  </p>
                  <button
                    type="submit"
                    class="btn btn-primary justify-self-center"
                    :disabled="$v.$invalid"
                  >Отправить</button>
                </form>
              </v-card>
            </v-col>
            <v-col cols="6" class="ours">
              <h4>Часы работы</h4>
              <p>
                Мы принимаем заказы круглосуточно и готовы произвести расчет вашего заказа в кратчайшие сроки.
                <br />Часы работы офиса:
                <br />с 10.00 до 18.00 по будням
                <br />Часы работы производства:
                <br />круглосуточно, без выходных.
                <br />
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <Map />
  </div>
</template>

<script>
import { required, minLength, email, numeric } from "vuelidate/lib/validators";
import Map from "@/components/chunks/Map";
export default {
  components: {
    Map
  },
  data() {
    return {
      cards: [
        {
          icon: "far fa-address-card",
          title: "E-mail",
          href: "info@apprint.ru",
          href1: ""
        },
        {
          icon: "far fa-address-card",
          title: "Адрес офиса",
          href: "ул. Бассейная, д.21, офис 502",
          href1: ""
        },
        {
          icon: "far fa-address-card",
          title: "Телефоны",
          href: "8 (812) 994-16-47",
          href1: ""
        }
      ],
      email: "",
      name: "",
      phone: "",
      //   file: "",
      text: "",
      submitStatus: null
    };
  },
  validations: {
    email: {
      required,
      email
    },
    phone: {
      required,
      numeric
    },
    name: {
      required,
      minLength: minLength(3)
    }
  },
  mounted() {
    this.$store.dispatch("getPage", 9);
  },

  computed: {
    page() {
      return this.$store.getters.page[0];
    },
    status() {
      // return this.$store.getters.LOADING;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email &&
        errors.push("Адрес электронной почты введен неверно");
      !this.$v.email.required && errors.push("Не заполнено обязательное поле");
      return errors;
    },

    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.numeric &&
        errors.push("Это поле может содержать только цифры");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Это поле обязательно");
      !this.$v.name.minLength &&
        errors.push(
          `Пароль должен содержать ни меньше ${this.$v.name.$params.minLength.min} символов`
        );
      return errors;
    }
  }
};
</script>
<style lang="scss" scoped>
.contacts-list {
  background-color: #edf5ff;
  .single-services {
    padding: 10px;
    a {
      font-size: 1.2em;
    }
  }
}
.contacts {
  .btn {
    display: block;
    width: 100%;
    letter-spacing: 2px;
    &:disabled {
      background: var(--v-gray-base);
      &:hover {
        transform: translateY(0) !important;
        cursor: not-allowed !important ;
        &::after,
        &::before {
          width: 0% !important;
        }
      }
    }
  }
}
.ours {
  h4 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
</style>

