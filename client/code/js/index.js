import Vue from 'vue'
import banner from '../components/banner.vue'
import store from '../vuex/store'

new Vue({
	el: 'body',
	store,
	components: { banner },
})