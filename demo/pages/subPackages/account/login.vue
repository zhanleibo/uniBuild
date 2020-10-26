<template >
	<view  id="login">
		<view  class="logo-box">
			<image src="/static/logo.png"></image> 
		</view > 
		<view  class="input-box">
			<view  class="user">用户：<input type="text" placeholder="请输入用户名" /></view >
			<view  class="password">密码：<input type="password"  placeholder="请输入密码"/></view >
			<button class="login-btn">登录</button>
		</view >
		<view  class="footer absolute bottom">
			 杭州天富德泰科技有限公司
		</view >
	</view ></template><script></script> <style scoped>  
@import url('@/common/css/common.scss');
 #login{ 
	 width: 100%; 
	 display: flex;
	 flex-direction: column;
	 align-items: center;
	 justify-content: center;
 
	  
 } 
 #login .logo-box{
	 width: 100%;
	 text-align: center;
 }
#login .logo-box image{ 
	height: 200rpx;
	width: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-top: 100rpx; 
	margin-bottom: 100rpx;  
}
#login .input-box{
	width: 100%;  
	 
}
#login .user,
#login .password{
	height: 100rpx;
	margin-left: 50rpx;
	margin-right: 50rpx;
	border-bottom: 1px solid #E8E8E8;
	display: flex;
	align-items: center;
	justify-items: left;
	flex-direction: row;
	color: #666;
}
#login .login-btn{
	margin-top: 20px;
	background-color: #29689D;
	margin-left: 50rpx;
	margin-right: 50rpx;
	color: #FFFFFF;
}
.footer{ 
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100rpx;
	margin-bottom: auto;
	color: #666666;
	font-size: 30rpx;
	
}</style>
