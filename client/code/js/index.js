import Vue from 'vue'
import goods_box from '../components/goodsBox.vue'
import store from '../store/store'

new Vue({
	el: 'body',
	store,
	components: { goods_box },
})