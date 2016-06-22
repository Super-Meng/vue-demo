import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

import goods_details from './modules/goods_details'

Vue.use(Vuex)

Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        goods_details
    },
    strict: debug,
    moddlewares: debug ? [createLogger()] : []
})
