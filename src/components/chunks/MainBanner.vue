<template>
	<section class="main-banner section">
		<v-container class="box" fill-height>
			<v-layout text-center align-center justify-center>
				<v-flex xs12 md6>
					<div class="wrap">
						<h1>Срочная печать каталогов за 24 часа</h1>
						<p>Круглосуточное собственное производство</p>
						<button class="btn btn-primary" elevation="0">Рассчитать</button>
					</div>
				</v-flex>
				<v-flex class="d-none d-sm-none d-md-flex" justify-center>
					<v-layout justify-center>
						<v-img
							:src="require('@/assets/img/main_slider/01.png')"
							:lazy-src="require('@/assets/img/main_slider/01.png')"
							max-width="350"
						/>
					</v-layout>
				</v-flex>
			</v-layout>
			<div class="shape-1"></div>
			<div class="shape1">
				<img
					src="data:image/png;base64,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"
					alt="img"
				/>
			</div>
			<div class="shape2">
				<img
					src="data:image/png;base64,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"
					alt="img"
				/>
			</div>
			<div class="shape3">
				<img
					src="data:image/png;base64,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"
					alt="img"
				/>
			</div>
			<div class="shape4 rotateme">
				<img
					src="data:image/png;base64,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"
					alt="img"
				/>
			</div>
		</v-container>
	</section>
</template>

<script>
	export default {
		data: () => ({})
	};
</script>
<style lang="scss" scoped>
	p {
		margin: 30px 0;
		font-size: 1.2em;
	}
	.main-banner {
		height: calc(100vh - 64px);
		background: var(--v-white-base);
		position: relative;
		z-index: 1;

		.wrap {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			h1 {
				font-size: 60px;
				text-align: left;
				line-height: 1.2em;
			}
			p {
				font-size: 18px;
				text-align: left;
				margin-top: 30px;
				margin-bottom: 35px;
			}
			.btn-primary {
				width: 200px;
				text-align: center;
			}
		}

		.shape-1 {
			position: absolute;
			left: 20px;
			bottom: 10px;
			height: 150px;
			width: 150px;
			border-radius: 50%;
			z-index: -1;
			opacity: 0.5;
			background-color: #edf5ff;
			animation: movebounce 5s linear infinite;
		}

		.shape1 {
			position: absolute;
			top: 85px;
			z-index: -1;
			left: 30px;
			animation: movebounce 5s linear infinite;
		}

		.shape2 {
			position: absolute;
			top: 85px;
			z-index: -1;
			right: 30px;
			animation: movebounce 5s linear infinite;
		}

		.shape3 {
			position: absolute;
			bottom: 85px;
			left: 30px;
			z-index: -1;
			animation: movebounce 5s linear infinite;
		}

		.shape4 {
			position: absolute;
			right: 17%;
			top: 23%;
			opacity: 0.3;
			z-index: -1;
			animation: movebounce 5s linear infinite;
		}

		.rotateme {
			animation-name: rotateme;
			animation-duration: 40s;
			animation-iteration-count: infinite;
			animation-timing-function: linear;
		}
	}
</style>
