<template>
	<v-app>
		<Loader />
		<v-overlay opacity="1" color="white" :value="showPreloader">
			<v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
		</v-overlay>

		<Sidebar :logo="settings.logo" />
		<Header :email="settings.mail" :phone="settings.phone" />
		<v-content>
			<router-view></router-view>

			<!-- <MainBanner/>
			<MainCards/>
			<Feedback/>
			<Partners/>
			<Map/>-->
			<!-- <Footer /> -->
		</v-content>

		<!-- TODO доделать карту  -->
	</v-app>
</template>

<script>
	import Sidebar from "@/components/chunks/Sidebar";
	import Header from "@/components/chunks/Header";
	import Loader from "@/components/common/Loader";
	// import MainBanner from '@/components/chunks/MainBanner'
	// import MainCards from '@/components/chunks/MainCards'
	// import Feedback from '@/components/chunks/Feedback'
	// import Partners from '@/components/chunks/Partners'
	// import Map from '@/components/chunks/Map'
	import Footer from "@/components/chunks/Footer";

	export default {
		name: "App",
		components: {
			Sidebar,
			Header,
			Loader,
			// MainBanner,
			// MainCards,
			// Feedback,
			// Partners,
			// Map,
			Footer
		},
		data: () => ({
			showPreloader: false,
			showSidebar: false,
			showHeader: false
		}),
		mounted() {},
		computed: {
			settings() {
				return this.$store.getters.settings;
			}
		}
	};
</script>
<style lang="scss">
	@import "sass/main";
</style>
