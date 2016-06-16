import Vue from 'vue'
import goods_box from '../components/goodsBox.vue'
import store from '../vuex/store/goods'

new Vue({
	el: 'body',
	store,
	components: { goods_box },
})