<template>
	<section class="main-cards section">
		<v-container grid-list-lg>
			<div class="section-title">
				<h2>Наша продукция</h2>
				<div class="bar"></div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
			<v-row justify="center">
				<v-col cols="10">
					<v-row justify="center">
						<v-col lg="4" xs="2" v-for="(item, i) in cards" :key="i">
							<router-link :to="item.alias">
								<div class="single-services d-flex flex-column align-center justify-center">
									<v-btn class="icon" outlined fab elevation="0" icon color="primary" x-large>
										<v-icon class>far fa-address-card</v-icon>
									</v-btn>

									<h4>{{ item.title }}</h4>
									<p>{{ item.subtitle }}</p>
								</div>
							</router-link>
						</v-col>
					</v-row>
				</v-col>

				<!-- TODO исправить тень -->
				<!-- TODO сделать png иконки  -->
			</v-row>
		</v-container>
	</section>
</template>

<script>
	import IconBase from "@/components/icons/IconBase.vue";
	import IconCard from "@/components/icons/IconCard.vue";
	import IconLeaflets from "@/components/icons/IconLeaflets.vue";
	import IconEurobuklet from "@/components/icons/IconEurobuklet.vue";
	import IconMenu from "@/components/icons/IconMenu.vue";
	import IconCalendars from "@/components/icons/IconCalendar.vue";
	import IconCatalogs from "@/components/icons/IconCatalogs.vue";
	import IconKonverts from "@/components/icons/IconKonverts.vue";
	import IconPakets from "@/components/icons/IconPakets.vue";

	export default {
		components: {
			IconBase,
			IconCard,
			IconLeaflets,
			IconEurobuklet,
			IconMenu,
			IconCalendars,
			IconCatalogs,
			IconKonverts,
			IconPakets
		},
		data: () => ({
			isIntersecting: false
		}),
		mounted() {
			// this.$store.dispatch('GET_CARDS');
		},
		methods: {
			onIntersect(entries, observer) {
				// More information about these options
				// is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
				this.isIntersecting = entries[0].isIntersecting;
			}
		},
		computed: {
			cards() {
				return this.$store.getters.products;
			}
		}
	};
</script>
<style lang="scss" scoped>
	.main-cards {
		z-index: 1;
		position: relative;
		// background-image: url("https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbg%2Fcta-bg-121cbe532ff449e99f866af90af0e84f.jpg?alt=media&token=9e5c4e6a-0ee6-4bce-9b61-0ec22fd2bfe8");
		// background-position: center center;
		// background-size: cover;
		// background-attachment: fixed;
		// background-repeat: no-repeat;

		// &::before {
		// 	content: "";
		// 	position: absolute;
		// 	z-index: -1;
		// 	left: 0;
		// 	top: 0;
		// 	width: 100%;
		// 	height: 100%;
		// 	background: var(--v-primary-base);
		// 	opacity: 0.87;
		// }
		a {
			text-decoration: none;
		}
	}

	.single-services {
		position: relative;
		background: var(--v-white-base);
		min-height: 250px;
		padding: 30px;
		box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.08);
		transition: 0.4s;
		cursor: pointer;
		transition: 0.4s;
		&::before {
			content: "";
			position: absolute;
			z-index: -1;
			background: #ffffff;
			width: 96%;
			opacity: 0.62;
			height: 50%;
			bottom: -6px;
			left: 0;
			right: 0;
			margin: auto;
			border-radius: 3px;
			-webkit-transition: 0.4s;
			transition: 0.4s;
		}

		&:hover {
			transform: translateY(-8px);
			box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
			.icon {
				background: var(--v-secondary-base);
				border-color: var(--v-secondary-base);
				i {
					color: var(--v-white-base);
				}
			}
		}
	}
</style>

