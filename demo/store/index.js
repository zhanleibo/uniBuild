import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {},
		hasLogin: false,
	},
	mutations: {
		storeLogin(state, payload) { // 改变登录状态
			const temp = {
				hasLogin: true,
				token: payload.token,
				profile: payload.profile
			}
			
			state.userInfo = Object.assign({}, state.userInfo, temp)
			
			// 将用户信息保存在本地
			uni.setStorageSync('userInfo', JSON.stringify(state.userInfo))
		
		},
		storeLogout(state) { //退出登录
			const temp = {
				hasLogin: false,
				token: '',
				profile: {}
			}
			state.userInfo = Object.assign({}, state.userInfo, temp)
			
			uni.removeStorageSync('userInfo')
		},
	}
})

export default store
