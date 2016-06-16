import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const GET_GOODS = (page) => {

	// Vue.http.post('./json/goods.json', page).then((res) => {
	// 	console.log(res.data)
	// 	return res.data
	// })
	console.log(page)
	if(page == 10){
		return [{
			"src": "image/index/g_2.jpg",
			"name": "666",
			"type": "丽影魅衣",
			"price_now": "6666",
			"price_old": "666",
			"like_is": false,
			"like_num": "666"
		}]
	}

	return [{
		"src": "image/index/g_1.jpg",
		"name": "2016时尚渐变色波西米亚长裙2016时尚渐变色波西米亚长裙",
		"type": "丽影魅衣",
		"price_now": "123",
		"price_old": "456",
		"like_is": true,
		"like_num": "999"
	}]
}