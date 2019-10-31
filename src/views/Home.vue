<template>
	<div>
		<MainBanner />  
		<MainCards />
		<Feedback />
		<Partners />
		<Map />
	</div>
</template>

<script>
// import Loader from '@/components/Loader'
import MainBanner from '@/components/chunks/MainBanner'
import MainCards from '@/components/chunks/MainCards'
import Feedback from '@/components/chunks/Feedback'
import Partners from '@/components/chunks/Partners'
import Map from '@/components/chunks/Map'



  export default {
	components: {
	//   Loader,
	  MainBanner,
	  MainCards,
	  Feedback,
	  Partners,
	  Map
	},
	data: () => ({
	  
	}),
	mounted() {
		// this.$store.dispatch('GET_PAGE', { id: 1 });
	},
	
	computed: {
		page() {
			// return this.$store.getters.PAGE;
		}, 
		status() {
			// return this.$store.getters.LOADING;
		}, 
	}
}
</script>

