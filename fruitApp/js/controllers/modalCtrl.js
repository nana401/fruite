app.controller('modalCtrl',['$scope','$http', '$ionicModal', 'md5',function(scope,http,ionicModal,md5){
	scope.hide = function(){
		scope.modal.hide();
	}
	scope.name = '登录';
	scope.phone = '13020003856';
	var randomString = function(len) {
	    len = len || 32;
	    for (var $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", maxPos = $chars.length, pwd = "", i = 0; i < len; i++)
	        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	    return pwd
	}
	var getMd5 = function(nonce, phoneNum) {
	    var token = "gDclCjcZ#89EIJio(7"
	      , phone = phoneNum;
	    return md5.createHash(nonce + phone + token).toUpperCase()
	}
	scope.submit = function(){
		http({
			url: 'http://as-vip.missfresh.cn/v1/auth/verify-captcha?device_id=0455f639779ac66cf8723f436fd14b1e&env=web&phone_number='+ scope.phone +'&platform=web&tdk=148662312024835870148&uuid=0455f639779ac66cf8723f436fd14b1e&version=2.3.4',
			method: 'post',
			data: {
				code: scope.code,
				phone_number: scope.phone
			}
		}).success(function(res){
			console.log(res); //登录成功 	res.token --> fdjldsjflsfjldsls //订单列表
			scope.modal.hide();
		})	
	}
	scope.sendCode = function(){
		console.log(scope.phone);
		var nonce = randomString();
		var md5 = getMd5(nonce, scope.phone);
		http({
			url: 'http://as-vip.missfresh.cn/v1/auth/login-register?device_id=0455f639779ac66cf8723f436fd14b1e&env=web&nonce='+ nonce +'&platform=web&signature='+ md5 +'&tdk=148662312024835870148&uuid=0455f639779ac66cf8723f436fd14b1e&version=2.3.4',
			method: 'post',
			data: {
				phone_number: scope.phone,
				send_type: 'SMS'
			}
		}).success(function(res){
			console.log(res);	 	
		})
	}
}]);