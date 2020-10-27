<template>
	<view id="index">
		<view class="head unishadow">
			<image class="logo" src="/static/logo.png"></image>
			<view class="login-area">
				<navigator url="">
					<button class="login-btn">{{title}}</button>
				</navigator>
				<text class="describe">松布自动模式/染色自动模式</text>
			</view>
		</view>
		<!-- 登录成功后显示的页面 -->
		<view class="content-box">
			 <view class="content-nav">染色</view>
			 <view class="content-nav">松布</view>
			 <view class="content-nav">运输单</view>
			 <view class="content-nav">成品入库</view>
			 <view class="content-nav">成品出库</view>
			 <view class="content-nav">框位校准</view>
			 <view class="content-nav">调度管理</view>
			 <view class="content-nav">工位回修</view>
			 <view class="content-nav">设置</view>
			 <view class="content-nav">电源</view>
			 
		</view>
	</view>
	 
</template>

<script>
	export default {
		data() {
			return {
				title: '请登录'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>  
<style>  
@import url('@/common/css/common.scss');
/* 头部 */
#index{
	width: 100%;
	height: 100vh; 
}
#index .head {
	height: 10vh;  
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content:space-between;
	padding: 10rpx 10rpx;
}

#index .head .logo {
	height: 100rpx;
	width: 200rpx; 
}

#index .head .login-area {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	
} 
#index .head .login {
	font-size: 40rpx;
	color: #2B85E4;
	font-weight: bolder; 
}
#index .head .describe{
	font-size: 28rpx;
	color: #8f8f94;
	margin-bottom: 20rpx;
}
/* 登录成功后显示的页面 */
#index .content-box{
	width: 100%;
	margin-top: 20rpx;
	height: 87vh;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;  
	border-top: 1px solid #CCCCCC;
	border-left: 1px solid #CCCCCC;
	
}

#index .content-box .content-nav{ 
	 border-bottom: 1px solid #CCCCCC;
	 border-right:  1px solid #CCCCCC;
	 display: flex;
	 flex-direction: row;
	 align-items: center;
	 justify-content: center;
}
</style>
