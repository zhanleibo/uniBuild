import request from '@/utils/request/index.js'
// 示例代码，接口名字以 api 开头命名，协同开人员看到引用后就知道这是接口方法
export function apiLogin(data) {
	return request.request({
		url: '',//请求地址 
		method: 'GET',//目前支持get/post
		data ,//入参值
		hideLoading: true//是否关闭加载菊花图
	})
}