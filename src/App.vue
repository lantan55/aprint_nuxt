<template>
	<v-app>
		<Loader />
		<v-overlay opacity="1" color="white" :value="showPreloader">
			<v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
		</v-overlay>

		<Sidebar v-if="!showPreloader" />
		<Header v-if="!showPreloader" />
		<v-content>
			<router-view></router-view>

			<!-- <MainBanner/>
			<MainCards/>
			<Feedback/>
			<Partners/>
			<Map/>-->
			<Footer />
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
		mounted() {
			this.showPreloader = true;
			Promise.all([
				// this.$http.get("/someUrl"),
				// this.$http.get("/someUrl2")
				console.log("Данные загружены")
			]).then(
				results => {
					// данные загружены, убираем прелоадер
					setTimeout(() => {
						this.showPreloader = false;
					}, 500);
					this.$store.dispatch("changeSidebar", true).then(() => {
						this.$store.dispatch("changeHeader", true);
					});
				},
				response => {
					// один или несколько запросов завершились с ошибкой
					// показываем сообщение об ошибке
					// this.showPreloader = false;
					// this.showError = true;
					console.log("Данные не загрузились");
					this.showError = true;
				}
			);
		}
	};
</script>
<style lang="scss">
	@import "sass/main";
</style>
