<template>
	<v-footer dark padless inset class="footer">
		<v-container class="footer-wrapper" fluid>
			<v-row>
				<v-col cols="12" sm="3" align-self="left">
					<v-layout class="footer-list" column>
						<h4>Продукция</h4>
						<ul class="row">
							<li v-for="(item, i) in cards" :key="i" class="col-md-6 col-6 col">
								<router-link :to="item.href">{{ item.title }}</router-link>
							</li>
						</ul>
					</v-layout>
				</v-col>
				<v-col cols="12" sm="3" align-self="left">
					<v-layout class="footer-list" column>
						<h4>Информация</h4>
						<ul class="row">
							<li v-for="(item, i) in mainMenu" :key="i" class="col-md-6 col-6 col">
								<router-link :to="item.href">{{ item.title }}</router-link>
							</li>
						</ul>
					</v-layout>
				</v-col>
				<v-col cols="12" sm="6" align-self="end">
					<v-layout class="footer-list" column>
						<img :src="require(`@/${siteOption.logo}`)" alt />
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident enim eaque odio et nemo qui accusamus quidem laboriosam molestiae! Facere blanditiis, delectus qui quis in distinctio vero dolore recusandae non!</p>
						<ul class="footer-list-social">
							<li>
								<a href="#"></a>
							</li>
						</ul>
					</v-layout>
				</v-col>
			</v-row>
			<v-row class="copyright" justify="space-between">
				<v-col cols="12" sm="4" order="2" order-sm="1" class="copyright-text">
					<p>
						Copyright @ {{ new Date().getFullYear() }} —
						Типография «Апрель».&nbsp;
						Все права защищены.
					</p>
				</v-col>
				<v-col cols="12" sm="4" order="1" order-sm="2" class="copyright-text">
					<p>
						<a href="#">Условия и положения</a>
						<a href="#">Политика конфиденциальности</a>
					</p>
				</v-col>
			</v-row>
		</v-container>
	</v-footer>
</template>
<script>
	export default {
		components: {},

		computed: {
			siteOption() {
				return this.$store.getters.siteOption;
			},
			cards() {
				return this.$store.getters.cards;
			},
			mainMenu() {
				return this.$store.getters.mainMenu;
			}
		}
	};
</script>
<style lang="scss" scoped>
	.footer {
		background: var(--v-black-base);
		padding-top: 15px;
		padding-bottom: 15px;
		&-wrapper {
			padding-left: 30px;
			padding-right: 30px;
			padding-top: 0;
			padding-bottom: 0;
			@media screen and (max-width: 600px) {
				padding-left: 15px;
				padding-right: 15px;
			}
		}
	}
	.footer-list {
		text-align: left;
		padding-right: 15px;
		h3 {
			font-size: 1.1em;
			color: var(--v-white-base);
		}
		h4 {
			font-size: 1.1em;
			@media screen and (max-width: 600px) {
				font-size: 0.9em;
			}
			color: var(--v-white-base);
		}

		ul {
			list-style-type: none;
			margin-top: 10px;
			padding-left: 0;
			line-height: 2em;

			li {
				font-size: 1em;
				padding-top: 0;
				padding-bottom: 0;
				@media screen and (max-width: 600px) {
					font-size: 0.8em;
				}
				a {
					text-decoration: none;
					color: #818992;
					transition: color 0.3s;
					&:hover {
						// text-decoration: underline;
						color: var(--v-secondary-base);
					}
				}
			}
		}
		img {
			display: inline-flex;
			width: 150px;
		}
	}
	.copyright {
		&-text {
			padding: 0;
			text-align: right;
			&:first-child {
				text-align: left;
			}
			@media screen and (max-width: 600px) {
				text-align: center;
			}
		}
		p {
			color: var(--v-gray-base);
			font-size: 0.8em;
			margin: 0;
			@media screen and (max-width: 600px) {
				text-align: center;
			}
		}
		a {
			margin-left: 15px;
			color: var(--v-white-base);
			&:first-child {
				margin-left: 0;
			}
			@media screen and (max-width: 600px) {
				display: block;
				margin-bottom: 5px;
			}
		}
	}
</style>
