<style lang="less" scoped>
.goods_box{
	.goods_list{
		position: relative;
		float: left;
		margin-top: 22px;
		margin-right: 27px;
		border-radius: 4px;
		overflow: hidden;
		transition: all 400ms ease-out;
		z-index: 2;
		&:nth-child(5n){
			margin-right: 0;
		}
		&:hover{
			box-shadow: 0 0 12px #999;
			& > .goods_img img{
				transform:scale(1.02);
			}
		}
	}
	.goods_img{
		width: 218px;
		height: 280px;
		overflow: hidden;
		img{
			display: block;
			width: 100%;
			transition: all 400ms ease-out;
		}
	}
	.goods_bottom{
		position: relative;
		width: 218px;
		box-sizing: border-box;
		padding: 0 12px 18px;
		.name{
			width: 100%;
			font-size: 12px;
			color: #1a1a1a;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    line-height: 28px;
		}
		.type{
			font-size: 12px;
			line-height: 12px;
			color: #999;
			margin-bottom: 14px;
		}
		.price{
			span{
				display: inline-block;
				color: #fa5d82;
				// @c_pink;
				font-size: 14px;
				margin-right: 8px;
				.data{
					font-size: 18px;
				}
				&.old{
					color: #b2b2b2;
					font-size: 12px;
					text-decoration: line-through;
					.data{
						font-size: 14px;
						color: #b2b2b2;
						text-decoration: line-through;
					}
				}
			}
		}
		.like{
			position: absolute;
			right: 12px;
			bottom: 18px;
			line-height: 24px;
			span{
				font-size: 12px;
				color: #666;
			}
			i{
				position: relative;
				top: 2px;
				margin-right: 4px;
				display: inline-block;
				width: 15px;
				height: 14px;
				background: url(../image/icon_like.png) no-repeat;
				background-position: top center;
			}
			&.active > i, &:hover > i{
				background-position: bottom center;
			}
		}
	}
}
</style>

<template lang="pug">
.goods_box
		.goods_list(v-for='Goods in goods')
			.goods_img
				img(v-bind:src='Goods.src')
			.goods_bottom
				.name {{Goods.name}}
				.type {{Goods.tyle}}
				.price
					span ¥&nbsp;
						span.data {{Goods.price_now}}
					span.old ¥&nbsp;
						span.data {{Goods.price_old}}
				a.like(href="javascript:" v-if='Goods.like_is == true').active
						i
						span {{Goods.like_num}}
				a.like(href="javascript:" v-if='Goods.like_is == false')
						i
						span {{Goods.like_num}}
</template>

<script>
import { DATA_GOODS } from '../store/getters'

export default{
	vuex: {
		getters: {
			goods: DATA_GOODS
		}
	}
}
</script>