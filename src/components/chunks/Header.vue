<template>
	<v-app-bar app dark elevate-on-scroll v-model="header">
		<v-app-bar-nav-icon @click="changeSidebar" class="d-flex"></v-app-bar-nav-icon>

		<v-toolbar-items>
			<v-list-item two-line>
				<v-list-item-icon class="mx-2 my-4">
					<v-icon class="icon">fas fa-phone</v-icon>
				</v-list-item-icon>
				<v-list-item-content class="contacts">
					<v-list-item-title class="contacts-title">{{ phone }}</v-list-item-title>
					<v-list-item-subtitle class="contacts-subtitle">Позвонить нам</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-list-item two-line class="d-none d-md-flex">
				<v-list-item-icon class="mx-2 my-4">
					<v-icon class="icon">fas fa-envelope</v-icon>
				</v-list-item-icon>
				<v-list-item-content class="contacts">
					<v-list-item-title class="contacts-title">{{ email }}</v-list-item-title>
					<v-list-item-subtitle class="contacts-subtitle">Запросить расчет</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-toolbar-items>

		<v-spacer></v-spacer>
		<v-toolbar-items class="topmenu d-none d-md-flex">
			<v-btn text :ripple="false" to="/">Главная</v-btn>
			<v-menu origin="center left" open-on-hover offset-y transition="slide-y-transition" right bottom>
				<template v-slot:activator="{ on }">
					<v-btn text :ripple="false" v-on="on">
						Информация
						<v-icon right>fas fa-chevron-down</v-icon>
					</v-btn>
				</template>
				<v-list min-width="200">
					<v-list-item link to="/about">
						<v-list-item-title>О типографии</v-list-item-title>
					</v-list-item>
					<v-list-item link to="/payment">
						<v-list-item-title>Оплата</v-list-item-title>
					</v-list-item>
					<v-list-item link to="/shipment">
						<v-list-item-title>Доставка</v-list-item-title>
					</v-list-item>
					<v-list-item link to="/urgent">
						<v-list-item-title>Срочная печать</v-list-item-title>
					</v-list-item>
					<v-list-item link to="/faq">
						<v-list-item-title>FAQ</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
			<v-btn text :ripple="false" to="/requirements">Тех.требования</v-btn>
			<v-btn text :ripple="false" to="/contacts">Контакты</v-btn>
		</v-toolbar-items>
	</v-app-bar>
</template>

<script>
	export default {
		data: () => ({}),
		props: {
			email: String,
			phone: String
		},
		mounted() {},
		methods: {
			changeSidebar() {
				this.$store.dispatch(
					"changeSidebar",
					!this.$store.getters.sidebarStatus
				);
			}
		},
		computed: {
			header() {
				return this.$store.getters.headerStatus;
			}
		}
	};
</script>
<style lang="scss" scoped>
	img {
		// width:150px;
	}
	.v-btn {
		// transition: 0.3s;
		height: auto;
		width: auto;
		margin: 0;
		padding: 6px;
		min-width: 0;
		opacity: 0.75;
		&:hover {
			opacity: 1;
			// background: var(--v-gray-base);
		}
	}
	.v-app-bar {
		&--fixed {
			background: var(--v-primary-base);
			.icon {
				color: var(--v-white-base);
				font-size: 1.3em;
			}
			.contacts {
				&-title {
					font-size: 1.1em;

					color: var(--v-white-base);
				}
				&-subtitle {
					font-size: 0.9em;
					color: var(--v-white-base);
				}
			}
		}
		&--is-scrolled {
			background: var(--v-white-base);
			.icon {
				color: var(--v-primary-base);
			}
			.contacts {
				&-title {
					color: var(--v-black-base);
				}
				&-subtitle {
					color: var(--v-black-base);
				}
			}
			.v-btn {
				color: var(--v-black-base);
			}
		}
	}

	.topmenu {
		.v-btn__content {
		}
		i {
			font-size: 12px;
		}
		// .v-btn {
		//   &:hover {
		//     opacity: 1;
		//   }
		// }
		// .v-btn--active {
		//   color: var(--v-secondary-base);
		//   &::before {
		//     opacity: 0;
		//   }
		// }
	}
</style>

