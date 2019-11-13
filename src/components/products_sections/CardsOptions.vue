<template>
	<section id="types" class="section options">
		<v-row>
			<v-col cols="9" offset="1">
				<v-row>
					<v-col>
						<h2>{{ title }}</h2>
						<p class="mt-2" v-if="subtitle" v-html="subtitle"></p>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="4" v-for="(item, i) in cards" :key="i">
						<v-img v-if="item.img" :src="item.img" height="200px"></v-img>
						<h4 class="mt-3">{{ item.title }}</h4>
						<p>{{ item.subtitle }}</p>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
		<svg
			class="svg-feedback-bottom"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
		>
			<path d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z" fill="#ffffff" />
		</svg>
	</section>
</template>

<script>
	export default {
		data: () => ({
			title: "Дополнительная обработка",
			subtitle: `
	      Печать не всегда является завершающим этапом в полиграфии. Вам может потребоваться дополнительная обработка, которая позволит защитить изделие от повреждений, придать ему эксклюзивный вид и выделиться на фоне остальных. Ниже представлены виды обработки, которые может выполнить наша типография
	    `,
			cards: [
				{
					id: 1,
					title: "Тиснение",
					subtitle:
						"Механическая обработка поверхности изделия для создания объёмного эффекта.",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcards%2Foptions%2Ftisnenie.jpg?alt=media&token=6a7d1b22-8a7a-48f1-b058-ada62a3dc571"
				},
				{
					id: 2,
					title: "УФ лак",
					subtitle:
						"Процесс нанесения лака на поверхность полиграфической продукции",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcards%2Foptions%2Fuv.jpg?alt=media&token=55189812-51da-4a62-b6f2-9f71e49ed38b"
				},
				{
					id: 3,
					title: "Ламинация",
					subtitle:
						"Нанесение на поверхность изделия полимерной плёнки для защиты и придания матового или глянцевого эффекта",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcards%2Foptions%2Flamination.jpg?alt=media&token=81402901-200f-4b55-a374-1f7a2074ea03"
				},
				{
					id: 4,
					title: "Перфорация",
					subtitle:
						"Процесс нанесения надсечек, формирующих линию отрыва",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcards%2Foptions%2Fperforation.jpg?alt=media&token=efeba203-46be-43a9-b5a3-9c21cbcdb443"
				},
				{
					id: 5,
					title: "Вырубка",
					subtitle:
						"Процесс вырезания изделия из уже отпечатанного листа при помощи специального фигурного (вырубного) штампа",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcards%2Foptions%2Fcut.jpg?alt=media&token=b5656d62-9bd2-484f-8a9b-c68426cc0027"
				},
				{
					id: 6,
					title: "Скругление углов",
					subtitle: "",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcards%2Foptions%2Fround.jpg?alt=media&token=f3d3ca5d-3852-4f58-9a68-62f36c1d3c48"
				}
			]
		})
	};
</script>
<style lang="scss" scoped>
	.section.options {
		background-color: #edf5ff;
		position: relative;
		z-index: 1;
		.svg-feedback-bottom {
			position: absolute;
			bottom: 0;
			left: 0px;
			width: 100%;
			height: auto;
			z-index: -1;
		}
	}
</style>

