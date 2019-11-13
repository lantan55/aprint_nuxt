<template>
	<section class="product leaflets section" :style="{'background-image': `url(${bg})`} ">
		<v-row>
			<v-col cols="9" offset="1">
				<v-row justify="space-between">
					<v-col cols="12">
						<h1>{{title}}</h1>
					</v-col>
					<v-col cols="7">
						<p class="black--text" v-html="subtitle"></p>
						<button class="btn btn-primary">Сделать заказ</button>
					</v-col>
					<v-col cols="4">
						<v-img
							:src="main_image"
							:lazy-src="main_image"
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
</template>

<script>
	export default {
		data: () => ({
			title: "Изготовление календарей",
			subtitle: `
			      Календарь – это отдельный вид полиграфической продукции, который будет целый год напоминать заказчикам о Вашей компании. У Вас всегда есть выбор - ограничиться утилитарным ТРИО, лаконичный настольный домик или сделать оригинальный дизайнерский перекидной. Стандартный ТРИО имеет верхний информационный блок 210х297 и три численных блока, 100 штук таких календарей будут стоить от 12 000 рублей. Все остальные возможные виды рассчитываются индивидуально.
			    `,
			main_image:
				"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcalendars%2Fwall-calendars-printing-service-500x500.png?alt=media&token=c02caadc-0653-48f4-97e9-5843579a14de",
			bg:
				"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbg%2Fcalendars.png?alt=media&token=cffddcbf-8573-4eba-b20f-f8b2544330c2"
		})
	};
</script>
<style lang="scss" scoped>
	.section.product.leaflets {
		background-repeat: repeat;
		background-position: left top;
		p {
			text-align: justify;
		}
	}
</style>

