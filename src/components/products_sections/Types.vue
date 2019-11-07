<template>
	<section id="types" class="section types">
		<v-row>
			<v-col cols="9" offset="1">
				<v-row>
					<v-col>
						<h2>{{ items.title }}</h2>
						<p class="mt-2" v-html="items.description"></p>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="4" v-for="(item, i) in items.typesCards" :key="i">
						<v-img :src="require(`@/${item.img}`)" height="200px"></v-img>
						<h4 class="mt-3">{{ item.title }}</h4>
						<p>{{ item.subtitle }}</p>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</section>
</template>

<script>
	export default {
		data: () => ({}),
		props: {
			items: Array
		}
	};
</script>
<style lang="scss" scoped>
</style>

