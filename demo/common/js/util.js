const PubFuc = {
	// 请求头
    apiHost: "",
	
	// 信息提示
    showTip:(title)=> {
        // #ifdef APP-PLUS
            plus.nativeUI.toast(title);
        // #endif
        // #ifdef MP-WEIXIN
        uni.showToast({
            "icon": "none",
            "title": title,
            });
        // #endif
    },
	
	// 加载菊花图
    showLoad:()=>{
    	uni.showLoading({
    	    title: '加载中',
    			icon: 'loading'
    	});
    },
	
    // 关闭加载
    hideLoad:()=>{
    	uni.hideLoading();
    },
    
    //设置离线缓存
    setStroage: (key, data) => {
    	uni.setStorageSync(key, data);
    },
    //获取离线缓存
    getStroage: (key) => {
    	let data = uni.getStorageSync(key);
    	return data;
    },
    //移除某个离线缓存
    removeStroage: (key) => {
    	uni.removeStorageSync(key);
    },
    //移除所有离线缓存
    closeAllStroage: () => {
    	uni.clearStorageSync();
    },
	// 跳转方式
    navigateTo:(url)=> {
        let goType = getCurrentPages().length >= 10 ? 'redirectTo' : 'navigateTo'
        uni[goType]({
            url,
            success: res => { },
            fail: res => { },
            complete: res => { },
        })
    },
    
    /**
     * 对象深拷贝
     */
    deepClone(data){
    		let type = this.isType(data);
        var obj;
        if (type === 'Array') {
    			obj = [];
        } else if (type === 'Object') {
    			obj = {};
        } else {
    			//不再具有下一层次
    			return data;
        }
        if (type === 'Array') {
    			for(let item of data){
    				obj.push(this.deepClone(item))
    			}
        } else if (type === 'Object') {
          for (var key in data) {
    				obj[key] = this.deepClone(data[key]);
    			}
        }
        return obj;
    },
    // 判断类型
    isType(data) {
    	let type = Object.prototype.toString.call(data).replace(/\[object\s|\]/g,'');
    	return type;
    },
    
}

export default PubFuc