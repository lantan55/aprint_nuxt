<template>
	<div>
		<Description />
		<Types />
		<Issues />
		<Feedback />
	</div>
</template>

<script>
	import Description from "@/components/products_sections/CalendarsDescription";
	import Types from "@/components/products_sections/CalendarsTypes";
	import Options from "@/components/products_sections/CalendarsOptions";
	import Issues from "@/components/products_sections/CalendarsIssues";
	import Feedback from "@/components/chunks/Feedback";

	export default {
		components: {
			Description,
			Types,
			Options,
			Issues,
			Feedback
		},
		data: () => ({}),
		mounted() {},

		computed: {}
	};
</script>
<style lang="scss" scoped>
</style>

