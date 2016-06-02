var Vue = require('vue')
var goodsBox = require('./vue/goodsBox.vue')

goodsBox.data = {
	goods: [
		{
			src: 'image/index/g_1.jpg',
			name: '2016时尚渐变色波西米亚长裙2016时尚渐变色波西米亚长裙',
			type: '丽影魅衣',
			price_now: '123',
			price_old: '456',
			like_is: true,
			like_num: '999',
		},
		{
			src: 'image/index/g_1.jpg',
			name: '2016时尚渐变色波西米亚长裙2016时尚渐变色波西米亚长裙',
			type: '丽影魅衣',
			price_now: '123',
			price_old: '456',
			like_is: false,
			like_num: '999',
		},
		{
			src: 'image/index/g_2.jpg',
			name: '2016时尚渐变色波西米亚长裙2016时尚渐变色波西米亚长裙',
			type: '丽影魅衣',
			price_now: '123',
			price_old: '456',
			like_is: true,
			like_num: '999',
		},
		{
			src: 'image/index/g_3.jpg',
			name: '2016时尚渐变色波西米亚长裙2016时尚渐变色波西米亚长裙',
			type: '丽影魅衣',
			price_now: '123',
			price_old: '456',
			like_is: true,
			like_num: '999',
		},

	]
}
new Vue(goodsBox)