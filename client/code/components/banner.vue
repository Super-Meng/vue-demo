<style lang="less" scoped>
	@import (less) '../less/config.less';
	@banner_h: 9.37rem;
	@mb: 0.24rem;
	.banner{
		position: relative;
		width: @ww;
		height: @banner_h;
		overflow: hidden;
		.image_box{
			position: relative;
			left: 0;
			width: 100%;
			height: @banner_h;
			overflow: hidden;
			ul{
				position: relative;
				left: 0;
				li{
					float: left;
					width: @ww;
				}
			}
			img{
				display: block;
				width: 100%;
			}
		}
		.dot_box{
			position: absolute;
			text-align: center;
			bottom: 0.20rem;
			width: 100%;
			line-height: 0;
			a{
				display: inline-block;
				width: 0.16rem;
				height: 0.16rem;
				background: #FFF;
				border-radius: 50%;
				margin: 0 0.06rem;
				&.active{
					background: @c_blue;
				}
			}
		}
	}
</style>

<template lang="pug">
	.banner
		.image_box
			ul
				li(v-for='_photo in photo')
					a(v-bind:href='_photo.href')
						img(v-bind:src='_photo.src')
				.clear
		.dot_box
			a(v-for='_dot in photo' href='javascript:')
</template>

<script>
	import { DATA_GOODS } from '../vuex/getters'
	export default{
		vuex: {
			getters: {
				photo: DATA_GOODS
			}
		}
	}
</script>