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
			title: "Изготовление буклетов",
			subtitle: `
	      Буклетом можно назвать всю листовую продукцию, имеющую сгиб (открытки, евробуклеты, гормошки…) Буклет, по своей сути, та же листовка, только с большим объёмом информации на меньшей площади (в сложенном состоянии). Сгибы буклета позволяют органично разместить блоки по все площади, разделить разные смысловые части, чтобы читателю было удобнее ориентироваться и понимать транслируемую информацию. Буклеты чаще всего печатаются на мелованной бумаге плотность 130 или 170 гр/м. Также мы всегда можем предложить и нестандартное исполнение буклетов – более плотную бумаги или дизайнерскую, дополнительную декоративную отделку, перфорацию для лёгкого отделения части буклета.
	      <br />
	      Для примера – 1000 евробуклетов (лист А4 с двумя сложениями) на мелованной бумаге 170 гр/м. будут стоить 5500 рублей. 100 буклетов А5 (А4 сложенный пополам) на белоснежной бумаге 300 гр – 3000 рублей.
	    `,
			main_image:
				"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbooklets%2Feuro_1.png?alt=media&token=c8ba2c39-68d5-494f-b9a9-b1f8c26e4511",
			bg:
				"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbg%2Fbooklets.png?alt=media&token=fe93f204-c6cf-440c-ac88-f5119b216d9e"
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

