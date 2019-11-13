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
					<v-col cols="4" v-for="(item, i) in cards" :key="i">
						<v-img contain v-if="item.img" :src="item.img" height="150px"></v-img>
						<h4 class="mt-3 text-center">{{ item.title }}</h4>
						<p class="text-center">{{ item.subtitle }}</p>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</section>
</template>

<script>
	export default {
		data: () => ({
			title: "Виды календарей",
			subtitle: `Описание для видов календарей
										      `,
			cards: [
				{
					id: 1,
					title: "Перекидной",
					subtitle: "описание",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcalendars%2Ftypes%2Fkalandar-perekidnoy-450_10153312201610.jpg?alt=media&token=e6bc781f-95e9-44b0-95d4-d6a8316deb45"
				},
				{
					id: 2,
					title: "Перекидной",
					subtitle: "Описание",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcalendars%2Ftypes%2Fkalendar-trio-450_10214112201610.jpg?alt=media&token=90bf4ed1-9389-41d9-b7b4-ef599c360117"
				},
				{
					id: 3,
					title: "Окно",
					subtitle: "2 сложения",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcalendars%2Ftypes%2Fkalendar-mono-450_0333401620151189.jpg?alt=media&token=3b26aca7-3cdf-4fd4-b83f-44bed86007f7"
				},
				{
					id: 4,
					title: "Перекидной",
					subtitle: "описание",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcalendars%2Ftypes%2Fkarman-450.jpg?alt=media&token=dfb082da-4893-4d06-b5a1-b55261b45e95"
				},
				{
					id: 5,
					title: "Перекидной",
					subtitle: "описание",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcalendars%2Ftypes%2Fkalendar-domik-samosborniy-450_0331251620151129.jpg?alt=media&token=1f957d33-ec51-49a9-be54-8555679d4d55"
				},
				{
					id: 6,
					title: "Перекидной",
					subtitle: "описание",
					img:
						"https://firebasestorage.googleapis.com/v0/b/apprint-1552339217465.appspot.com/o/products%2Fcalendars%2Ftypes%2Fdomik-perekid-450.jpg?alt=media&token=cc81498d-9aa2-49c9-a787-ef5ebe0796f3"
				}
			]
		})
	};
</script>
<style lang="scss" scoped>
</style>

