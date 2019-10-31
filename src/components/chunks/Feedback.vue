<template>
  <section class="section feedback">
    <v-container justify-center class="box">
      <div class="section-title">
        <h2>Заявка на расчет</h2>
        <div class="bar"></div>
        <p>Отправьте нам запрос на расчет и наши менеджеры в кратчайшие сроки расчитают Ваш заказ. Мы принимаем заказы 24/7.312</p>
      </div>
      <v-card class="feedback-box">
        <form @submit.prevent="onSubmit">
          <v-text-field
            filled
            color="primary"
            clearable
            outlined
            label="Имя"
            prepend-icon="fas fa-id-badge"
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
            prepend-icon="fas fa-envelope"
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
            prepend-icon="fas fa-phone"
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
            prepend-icon="far fa-comment-dots"
          ></v-textarea>
          <p>
            Нажимая на кнопку "Отправить", Вы соглашаетесь с
            <a
              href="https://policies.google.com/privacy"
            >политикой конфиденциальности</a>
          </p>
          <button type="submit" class="btn btn-primary" :disabled="$v.$invalid">Отправить запрос</button>
        </form>
      </v-card>
    </v-container>
  </section>
</template>
<script>
import { required, minLength, email, numeric } from "vuelidate/lib/validators";

export default {
  data() {
    return {
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
  methods: {
    // onSubmit() {
    // 	this.$v.$touch();
    // 	if (this.$v.$invalid) {
    // 		this.submitStatus = 'В форме содержаться ошибки';
    // 	} else {
    // 		console.log('submit!');
    // 		const user = {
    // 			email: this.email,
    // 			name: this.name,
    // 			password: this.password
    // 		};
    // 		this.$store
    // 			.dispatch('registerUser', user)
    // 			.then(() => {
    // 				console.log('REGISTER!');
    // 				this.submitStatus = 'Отправка формы...';
    // 				this.$router.push('/');
    // 			})
    // 			.catch(err => {
    // 				this.submitStatus = err.message;
    // 				console.log(err.message);
    // 			});
    // 		console.log(user);
    // 		// // do your submit logic here
    // 		// this.submitStatus = 'PENDING';
    // 		// setTimeout(() => {
    // 		// 	this.submitStatus = 'OK';
    // 		// }, 500);
    // 	}
    // }
  },
  mounted() {},
  computed: {
    // loading() {
    // 	return this.$store.getters.loading;
    // },
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
.feedback {
  background-color: #edf5ff;

  &-box {
    max-width: 600px;
    margin: 0 auto;
    -webkit-box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
    background: #ffffff;
    padding: 40px;
    text-align: center;
    border-radius: 3px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-control {
    display: block;
    width: 100%;
    line-height: 1.5;
    height: 50px;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    color: #818992;
    background: #ffffff;
    &:focus {
      color: #818992;
      background-color: #ffffff;
      border-color: var(--v-primary-base);
      outline: 0;
      -webkit-box-shadow: unset;
      box-shadow: unset;
    }
  }
  .btn {
    display: block;
    width: 100%;
    letter-spacing: 2px;

    &:hover {
      background: var(--v-primary-base);
      color: var(--v-white-base);
      &::after,
      &::before {
        width: 50%;
      }
    }
    &::after,
    &::before {
      background: var(--v-primary-base);
    }
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
</style>
