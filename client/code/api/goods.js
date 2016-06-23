// import Vue from 'vue'
// import VueResource from 'vue-resource'
// 
// Vue.use(VueResource)
// 
// export const SHENMEGUI () => {
// 	Vue.http.post('./json/goods.json', page).then((res) => {
// 		console.log(res.data)
// 		return res.data
// 	}
// }
// 
const data = {
	"banner": {
		"photo": [{
				"src": "image/details/goods.jpg",
				"href": "javascript:"
			},
			{
				"src": "image/details/goods.jpg",
				"href": "javascript:"
			},
			{
				"src": "image/details/goods.jpg",
				"href": "javascript:"
			},
			{
				"src": "image/details/goods.jpg",
				"href": "javascript:"
			}],
		"autoPlay_speed": 3600,
		"animate_speed": 300,
		"autoPlay": false,
	}
}


export const GET_GOODS_BANNER = data.banner

export const GET_GOODS_DETAILS = data
