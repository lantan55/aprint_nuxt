// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
	// configureWebpack: {
	// 	plugins: [
	// 		new VuetifyLoaderPlugin({
	// 			/**
	// 			 * This function will be called for every tag used in each vue component
	// 			 * It should return an array, the first element will be inserted into the
	// 			 * components array, the second should be a corresponding import
	// 			 *
	// 			 * originalTag - the tag as it was originally used in the template
	// 			 * kebabTag    - the tag normalised to kebab-case
	// 			 * camelTag    - the tag normalised to PascalCase
	// 			 * path        - a relative path to the current .vue file
	// 			 * component   - a parsed representation of the current component
	// 			 */
	// 			match (originalTag, { kebabTag, camelTag, path, component }) {
	// 				if (kebabTag.startsWith('core-')) {
	// 					return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
	// 				}
	// 			}
	// 		})
	// 	],
	// },
	css: {
		loaderOptions: {
			sass: {
				data: `@import "~@/sass/_variables"`,
			},
		},
	},
	chainWebpack: config => {
		["vue-modules", "vue", "normal-modules", "normal"].forEach((match) => {
		config.module.rule('scss').oneOf(match).use('sass-loader')
			.tap(opt => Object.assign(opt, { data: `@import '~@/sass/_variables';` }))
		})
	}
}