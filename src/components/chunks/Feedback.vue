<template>
	<section class="section feedback">
		<v-container justify-center class="box">
			<div class="section-title">
				<h2>Заявка на расчет</h2>
				<div class="bar"></div>
				<p>Отправьте нам запрос на расчет и наши менеджеры в кратчайшие сроки расчитают Ваш заказ. Мы принимаем заказы 24/7</p>
			</div>
			<v-card class="feedback-box">
				<form @submit.prevent="onSubmit">
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

					<button type="submit" class="btn btn-primary" :disabled="$v.$invalid">Отправить</button>
				</form>
			</v-card>
		</v-container>
		<div class="shape3">
			<img
				src="data:image/png;base64,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"
				alt="img"
			/>
		</div>
		<div class="shape10">
			<img
				src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTMiIGhlaWdodD0iMjM1Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSI2OS44NTclIiB4Mj0iMCUiIHkxPSIwJSIgeTI9IjcxLjU1NSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM5NUY0NjkiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxNUQwNkUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4xMDYiIGZpbGw9InVybCgjYSkiIGQ9Ik0xMzUuNDYxIDkuNjU0bDU2LjczMiAyMTEuNzI2YzIuODYyIDEwLjY4My0zLjE2NiAxNi4xMDItMTMuNDg1IDEyLjEyNEwxMC43MjIgMTY4LjczNmMtMTAuMzItMy45NzgtMTMuMDQ1LTE0LjE1MS02LjA5OC0yMi43NTZMMTE3LjcyMSA1Ljg5N2M2Ljk0Ny04LjYwNSAxNC44NzctNi45MjYgMTcuNzQgMy43NTd6Ii8+PC9zdmc+"
				alt="shape"
			/>
		</div>
		<div class="shape9">
			<img
				src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOC41NjIiIGhlaWdodD0iMjguNTk0Ij48Y2lyY2xlIGN4PSIxNC4yODEiIGN5PSIxNC4yOTciIHI9IjEyLjc4MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTFlMWUxIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4="
				alt="shape"
			/>
		</div>
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
		mounted() {
			console.log(this.$vuetify.breakpoint.smAndDown);
		},
		computed: {
			// loading() {
			// 	return this.$store.getters.loading;
			// },
			emailErrors() {
				const errors = [];
				if (!this.$v.email.$dirty) return errors;
				!this.$v.email.email &&
					errors.push("Адрес электронной почты введен неверно");
				!this.$v.email.required &&
					errors.push("Не заполнено обязательное поле");
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
		padding: 30px 0;
		background-color: #edf5ff;
		// background-image: url("../../assets/img/bg/bg1.png");
		// background-repeat: repeat;
		// background-position: left top;
		z-index: 1;
		position: relative;

		&-box {
			max-width: 600px;
			margin: 0 auto;
			-webkit-box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
			box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
			background: #ffffff;
			padding: 40px;
			@media screen and (max-width: 600px) {
				padding: 15px;
			}
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
		.shape10 {
			position: absolute;
			left: 5%;
			top: 8%;
			z-index: -1;
			animation: movebounce 5s linear infinite;
		}
		.shape9 {
			position: absolute;
			left: 45%;
			top: 40%;
			z-index: -1;
			animation: animationFramesOne 15s infinite linear;
		}
		.shape3 {
			position: absolute;
			bottom: 85px;
			z-index: -1;
			right: 30px;
			animation: movebounce 5s linear infinite;
		}
	}
</style>
