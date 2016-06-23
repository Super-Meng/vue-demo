import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'
import goods_details from 'modules/goods_details'

const debug = true
// process.env.NODE_ENV !== 'production'

Vue.config.debug = debug
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        goods_details
    },
	strict: debug,
	moddlewares: debug ? [createLogger()] : []
})