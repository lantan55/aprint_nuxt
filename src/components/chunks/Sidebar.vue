<template>
	<v-navigation-drawer
		app
		fixed=""
		width="350"
		color="white"
		class=""
	>
		<v-container column=""  align-center="" >
			<v-flex class="d-flex " justify-center>
				<router-link :to="{ name: '/' }">
					<img  
						:src="require('@/assets/img/logo.jpg')"  alt="" 	
					/>
				</router-link>
			</v-flex>
			<v-flex  class="d-flex " justify-center>
				<v-list class="pt-4 list" >
					<v-list-item
						:ripple="false" 
						link
						:to="{ name: 'businesscard' }"
					>
						<v-list-item-content>
							<v-list-item-title class="menu-title">Визитки</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item 
						:ripple="false" 
						active-class="primary white--text "
						link 
					>
						<v-list-item-title class="menu-title">Листовки</v-list-item-title>
					</v-list-item>
					<v-list-item 
						link
						:ripple="false" 
						active-class="primary white--text "  
					>
						<v-list-item-title class="menu-title ">Буклеты</v-list-item-title>
					</v-list-item>
					<v-list-item 
						link
						:ripple="false" 
						active-class="primary white--text "  
					>
						<v-list-item-title class="menu-title font-weight-regular">Календари</v-list-item-title>
					</v-list-item>
					<v-list-item 
						link
						:ripple="false" 
						active-class="primary white--text "  
					>
						<v-list-item-title class="menu-title font-weight-regular">Меню</v-list-item-title>
					</v-list-item>
					<v-list-item 
						link
						:ripple="false" 
						active-class="primary white--text "  
					>
						<v-list-item-title class="menu-title font-weight-regular">Конверты</v-list-item-title>
					</v-list-item>
					<v-list-item 
						link
						:ripple="false" 
						active-class="primary white--text "  
					>
						<v-list-item-title class="menu-title font-weight-regular">Пакеты</v-list-item-title>
					</v-list-item>
					<v-list-item 
						link
						:ripple="false" 
						active-class="primary white--text "  
					>
						<v-list-item-title class="menu-title font-weight-regular">Каталоги</v-list-item-title>
					</v-list-item>
					<v-list-item 
						link
						:ripple="false" 
						active-class="primary white--text "  
					>
						<v-list-item-title class="menu-title font-weight-regular">Прочие услуги</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-flex>
			<v-flex  class="d-flex " justify-center>
				<div class="section-title mt-4">
					<h3>Свяжитесь с нами</h3>
					<div class="bar"></div>
				</div>
			</v-flex>
			<v-flex  class="d-flex " justify-center>
				<v-btn
					fab
					color="vk--text"
					rounded
					class="ma-1 btn-social"
					small
				>
					<v-icon>fab fa-vk</v-icon>
				</v-btn>
				<v-btn
					fab
					color="black--text"
					rounded
					class="ma-1 btn-social"
					small
				>
					<v-icon >fab fa-instagram</v-icon>
				</v-btn>
				<v-btn
					fab
					color="fb--text"
					rounded
					class="ma-1 btn-social"
					small
				>
					<v-icon >fab fa-facebook-f</v-icon>
				</v-btn>
				<v-btn
					fab
					color="whats--text"
					rounded
					class="ma-1 btn-social"
					small
				>
					<v-icon >fab fa-whatsapp</v-icon>
				</v-btn>
			</v-flex>
		</v-container >
	</v-navigation-drawer>
</template>

<script>

export default {
	data: () => ({
	
	}),
};
</script>
<style lang="scss" scoped>
img{
	margin-top:5px;
	width: 150px;
}
.wrap{
	margin-top:50px;
	// padding-left:50px;
	// padding-right:25px;
}
.list{
	width: 100%;
	text-align: center;
}
.menu-title{
	font-size: 1.1em;
	text-transform: uppercase;
	
	
}
.section-title {
	margin-bottom: 5px;
	margin-top: -6px;
}
.btn-social{
	transition: .9s;
	&:hover, &:focus, &:active{
		transform: translateY(-5px);
	}
}
.list {
	.v-list-item{
		// font-weight: bold;
	}
}
</style>

