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
							<div class="single-services d-flex flex-column align-center justify-center">
								<v-btn class="icon" outlined fab elevation="0" icon color="primary" x-large>
									<v-icon class>far fa-address-card</v-icon>
								</v-btn>

								<h4>{{ item.title }}</h4>
								<p>{{ item.subtitle }}</p>
							</div>
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
				return this.$store.getters.cards;
			}
		}
	};
</script>
<style lang="scss" scoped>
	.main-cards {
		z-index: 1;
		position: relative;
		// background-color: #edf5ff;
		background-image: url("../../assets/img/bg/bg6.png");
		background-repeat: repeat;
		background-position: left top;
	}

	.single-services {
		background: var(--v-white-base);
		min-height: 250px;
		padding: 30px;
		box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.08);
		transition: 0.4s;
		cursor: pointer;
		transition: 0.4s;

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

