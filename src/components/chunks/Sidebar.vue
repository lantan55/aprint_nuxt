<template>
	<transition name="slide-fade">
		<v-navigation-drawer app color="white" class>
			<v-container column align-center>
				<v-flex class="d-flex" justify-center>
					<router-link to="/">
						<img :src="logo" alt />
					</router-link>
				</v-flex>
				<v-flex class="d-flex" justify-center>
					<v-list class="pt-4 list">
						<v-list-item v-for="(item, i) in menu" :key="i" :ripple="true" link :to="item.alias">
							<v-list-item-icon>
								<icon-base
									v-if="item.icon"
									class="icon"
									:viewBox=" item.id == 1 ? '0 0 32 18' : '0 0 32 32' "
									:icon-name="item.icon"
								>
									<component :is="item.icon"></component>
								</icon-base>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title class="menu-title">{{ item.title }}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-flex>
				<v-flex class="d-flex" justify-center>
					<div class="section-title mt-4">
						<h3>Свяжитесь с нами</h3>
						<div class="bar"></div>
					</div>
				</v-flex>
				<v-flex class="d-flex" justify-center>
					<v-btn
						v-for="(item, i) in socials"
						:key="i"
						fab
						color="primary--text"
						rounded
						class="ma-1 btn-social"
						small
						:to="item.link"
					>
						<v-icon>fab fa-{{item.name}}</v-icon>
					</v-btn>
				</v-flex>
			</v-container>
		</v-navigation-drawer>
	</transition>
</template>

<script>
	import IconBase from "@/components/icons/IconBase.vue";
	import IconCard from "@/components/icons/IconCard.vue";
	import IconLeaflets from "@/components/icons/IconLeaflets.vue";
	import IconEurobuklet from "@/components/icons/IconEurobuklet.vue";
	import IconMenu from "@/components/icons/IconMenu.vue";
	import IconCalendars from "@/components/icons/IconCalendar.vue";
	import IconCatalogs from "@/components/icons/IconCatalogs.vue";
	import IconKonverts from "@/components/icons/IconKonverts.vue";
	import IconPakets from "@/components/icons/IconPakets.vue";

	export default {
		components: {
			IconBase,
			IconCard,
			IconLeaflets,
			IconEurobuklet,
			IconMenu,
			IconCalendars,
			IconCatalogs,
			IconKonverts,
			IconPakets
		},
		data: () => ({}),
		props: {
			logo: String,
			social: Array
		},
		mounted() {
			// if (this.$vuetify.breakpoint.smAndDown) {
			// 	this.$store.dispatch("changeSidebar", false);
			// 	return;
			// }
			// this.$store.dispatch("changeSidebar", true);
		},
		computed: {
			menu() {
				return this.$store.getters.products;
			},
			socials() {
				return this.$store.getters.socials;
			}

			// sidebar: {
			// 	get: function() {
			// 		return this.$store.getters.sidebarStatus;
			// 	},
			// 	set: function(state) {
			// 		this.$store.dispatch("changeSidebar", state);
			// 	}
			// }
		}
	};
</script>
<style lang="scss" scoped>
	img {
		margin-top: 5px;
		width: 150px;
	}
	.wrap {
		margin-top: 50px;
		// padding-left:50px;
		// padding-right:25px;
	}
	.list {
		width: 100%;
		// text-align: center;
	}
	.menu-title {
		font-size: 1.1em;
		font-weight: 400;
		// text-transform: uppercase;
	}
	.section-title {
		margin-bottom: 5px;
		margin-top: -6px;
	}
	.btn-social {
		transition: 0.9s;
		&:hover,
		&:focus,
		&:active {
			transform: translateY(-5px);
		}
	}
	.list {
		.v-list-item {
			// font-weight: bold;
		}
	}
	h3 {
		font-size: 1.4em;
	}

	/* Анимации появления и исчезновения могут иметь */
	/* различные продолжительности и динамику.       */
	.slide-fade-enter-active {
		transition: all 0.3s ease;
	}
	.slide-fade-leave-active {
		transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-enter, .slide-fade-leave-to
																															/* .slide-fade-leave-active до версии 2.1.8 */ {
		transform: translateX(10px);
		opacity: 0;
	}
</style>

