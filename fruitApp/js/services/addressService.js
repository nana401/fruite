app.factory('addressService',function($http){
	var addressData = $http({
		url:'http://as-vip.missfresh.cn/v2/address/list?device_id=7f733c6ce8b4003e0756f0493133edd8&env=web&platform=web&tdk=148670925732664026082&uuid=7f733c6ce8b4003e0756f0493133edd8&version=2.3.4',
		method:'get',
	})
	return {
		getHttpData:function(callback){
			addressData.success(callback);
		}
	}

})