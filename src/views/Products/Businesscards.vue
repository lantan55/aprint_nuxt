<template>
	<div>
		<section class="product cards section">
			<v-row>
				<v-col cols="9" offset="1">
					<v-row>
						<v-col cols="6">
							<h1>{{page.title}}</h1>
							<p class="mt-4 black--text" v-html="page.description"></p>
							<button class="btn btn-primary">Сделать заказ</button>
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

		<Types :items="page.types" />
	</div>
</template>

<script>
	import Types from "@/components/products_sections/Types";
	// import MainCards from "@/components/chunks/MainCards";
	// import Feedback from "@/components/chunks/Feedback";
	// import Partners from "@/components/chunks/Partners";
	// import Map from "@/components/chunks/Map";

	export default {
		components: {
			Types
			// MainBanner,
			// MainCards,
			// Feedback,
			// Partners,
			// Map
		},
		data: () => ({}),
		mounted() {
			this.$store.dispatch("getPage", 8);
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
	.section.product.cards {
		background-image: url("../../assets/img/bg/cards.png");
		background-repeat: repeat;
		background-position: left top;
	}
</style>

