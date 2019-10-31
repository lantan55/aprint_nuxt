<template>
	<div>        
		<Map />
	</div>
</template>
<script>
import Map from '@/components/chunks/Map'

export default {
	components: {
		Map,
	},
	data: () => ({
		// showPreloader: false,
		// anchors_list: [
		//     { title: 'Виды визиток', href: '#types' },
		//     { title: 'Сроки изготовления', href: '#times' },
		//     { title: 'Обработка', href: '#option' },
		//     { title: 'Требования к макетам', href: '#issues' },
		//     { title: 'Последние работы', href: '#gallery' },
		//     { title: 'Узнать стоимость', href: '#feedback' },
		// ],
		// feedbackHint: `
		//         Не забудьте в запросе указать такие параметры, как: <br /> 
		//         <b>
		//             Тип картона(мелованный или дизайнерский)<br /> 
		//             Цветность (4+0 или 4+4)<br /> 
		//             Размер визитки
		//         </b>
		// `,

		
	}),    
	computed: {
		// page() {
		//     return this.$store.getters.PAGE;
		// }, 
		// status() {
		//     return this.$store.getters.LOADING;
		// }, 
		// option_list() {
		//     return this.page.option_list ? JSON.parse(this.page.option_list)  : [];
		// },
		// gallery_list() {

		//     return this.page.gallery_list ? JSON.parse(this.page.gallery_list)  : [];
		// },
		
	},
	mounted() {
		// this.$store.dispatch('GET_PAGE', { id: 5 }) 
	},
	methods: {
		// handleScroll: function (evt, el) {
		//     if (window.scrollY > 80) {
		//         document.getElementsByClassName('my-nav')[0].classList.add('elevation-4')
		//     }else{
		//         document.getElementsByClassName('my-nav')[0].classList.remove('elevation-4')
		//     }
		// },
		
	},    
}








</script>
<style lang="scss" scoped>


// #wrap{
//     position: relative;
// }

</style>
