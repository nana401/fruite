app.factory('listService',function($http){
	//数据工厂  列表页的数据进行处理

	//本地缓存
	function Store(spaceName,data){
		if(data){
			localStorage.setItem(spaceName,JSON.stringify(data));
			return;
		}
		return (spaceName && JSON.parse(localStorage.getItem(spaceName))) || null;
	}

	//通过ajax获取数据
	var list = $http({
		url:'http://as-vip.missfresh.cn/v2/product/home/index?access_token=K091Q0RZSGxRUFV2azB1ejR1VmpnaVVRVEgxRDhNSlRvZXBUa1RCa0dYdz0%3D&device_id=7f733c6ce8b4003e0756f0493133edd8&env=web&fromSource=shareshop-baidupz&platform=web&tdk=148654055013675092327&uuid=7f733c6ce8b4003e0756f0493133edd8&version=2.3.4',
		method:'post',
		data:{
			lat:39.99173,
			lng:116.30965
		}
	})

	var coreData = null;//核心数据
	var bannerData = null;
	var coreCartData = {};

	function getCartList(obj){
		var arr = [];
		for(var key in obj){
			arr.push(obj[key]);
		}
		return arr;
	}
	return{
		getcoreCartData:function(){return coreCartData},
		getHttpData:function(callback){
			//callback 被称为回调函数： 当一个形参被作为函数方法传递给另一个方法的时候
			list.success(callback);
		},
		setData:function(data){
			coreData = data;
		},
		getData:function(){
			return coreData;
		},
		setBannerData:function(data){
			bannerData = data;
		},
		getBannerData:function(){
			return bannerData;
		},
		getCoreCartData:function(){
			return Store('cartList') || {};
		},
		setCart:function(item,scope){
			coreCartData[item.name] = item;
			if(item.num === 0){
				delete coreCartData[item.name];
				if(scope && scope.list){
					scope.list.splice(scope.index,1);
				}
			}
			//将数据缓存
			Store('cartList',coreCartData);
		},
		getCart:function(){
			var arr = [];
			if(!coreData){
				coreCartData = Store('cartList') || {};
				return (coreCartData && getCartList(coreCartData)) || false;
			}
			for(var i = 0;i < coreData.length;i++){
				if(coreData[i].num !== 0){
					arr.push(coreData[i]);
				}
			}
			return arr;
		},
		getAllGoodsNum:function(){
			var sum = 0;
			var storeData = Store('cartList') || {};
			if(storeData){
				for(var key in storeData){
					sum += storeData[key].num;
				}
			}
			return sum ;
		}
	}
})