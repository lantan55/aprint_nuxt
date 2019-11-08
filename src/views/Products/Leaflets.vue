<template>
	<div>
		<section class="product leaflets section">
			<v-row>
				<v-col cols="10" offset="1">
					<v-row>
						<v-col cols="6">
							<h1>{{page.title}}</h1>
							<p class="mt-4" v-html="page.description"></p>
						</v-col>
						<v-col cols="6">
							<v-img
								:src="page.main_image"
								:lazy-src="page.main_image"
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
		mounted() {},

		computed: {
			page() {
				return this.$store.getters.products[1] || {};
			},
			status() {
				// return this.$store.getters.LOADING;
			}
		}
	};
</script>
<style lang="scss" scoped>
	.section.product.leaflets {
		background-image: url("../../assets/img/bg/leaflets.png");
		background-repeat: repeat;
		background-position: left top;
	}
</style>

