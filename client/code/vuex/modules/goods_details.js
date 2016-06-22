import { GET_GOODS_DETAILS } from '../../api/goods'

const state = {
	photo: GET_GOODS_DETAILS().banner.photo
}

const mutations = {
	photo: GET_GOODS_DETAILS().banner.photo
}
export default {
    state,
    mutations
}