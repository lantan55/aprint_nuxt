<template>
	<section id="types" class="section types">
		<v-row>
			<v-col cols="9" offset="1">
				<v-row>
					<v-col>
						<h2>{{ title }}</h2>
						<p class="mt-2" v-html="subtitle"></p>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="9">
						<v-row>
							<v-col cols="3" v-for="(item, i) in cards" :key="i">
								<v-img contain v-if="item.img" :src="item.img" height="150px"></v-img>
								<h4 class="mt-3 text-center">{{ item.title }}</h4>
								<p class="text-center">{{ item.subtitle }}</p>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</section>
</template>

<script>
	export default {
		data: () => ({
			title: "Тип сложения",
			subtitle: `Описание для типов сложения
	      `,
			cards: [
				{
					id: 1,
					title: "Книжка",
					subtitle: "1 сложение",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbooklets%2Ftypes%2Ffolding.png?alt=media&token=3216a969-32cb-4bc0-96ec-7cbe6fe41f0f"
				},
				{
					id: 2,
					title: "Евробуклет",
					subtitle: "2 сложения",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbooklets%2Ftypes%2Ffolding.png?alt=media&token=3216a969-32cb-4bc0-96ec-7cbe6fe41f0f"
				},
				{
					id: 3,
					title: "Окно",
					subtitle: "2 сложения",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbooklets%2Ftypes%2Ffolding.png?alt=media&token=3216a969-32cb-4bc0-96ec-7cbe6fe41f0f"
				},
				{
					id: 4,
					title: "Гармошка",
					subtitle: "2 сложения",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbooklets%2Ftypes%2Ffolding.png?alt=media&token=3216a969-32cb-4bc0-96ec-7cbe6fe41f0f"
				},
				{
					id: 5,
					title: "Улитка",
					subtitle: "3 сложения",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbooklets%2Ftypes%2Ffolding.png?alt=media&token=3216a969-32cb-4bc0-96ec-7cbe6fe41f0f"
				},
				{
					id: 6,
					title: "Гармошка",
					subtitle: "3 сложения",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbooklets%2Ftypes%2Ffolding.png?alt=media&token=3216a969-32cb-4bc0-96ec-7cbe6fe41f0f"
				},
				{
					id: 7,
					title: "Окно",
					subtitle: "3 сложения",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbooklets%2Ftypes%2Ffolding.png?alt=media&token=3216a969-32cb-4bc0-96ec-7cbe6fe41f0f"
				},
				{
					id: 8,
					title: "Гармошка",
					subtitle: "4 сложения",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fbooklets%2Ftypes%2Ffolding.png?alt=media&token=3216a969-32cb-4bc0-96ec-7cbe6fe41f0f"
				}
			]
		})
	};
</script>
<style lang="scss" scoped>
</style>

