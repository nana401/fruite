app.controller('homeCtrl',['$scope','listService','$ionicModal',function(scope,list,ionicModal){
	//监听页面变化，获取本地缓存中的商品
	/*scope.$watch('homedata', function(){
           console.log('我进行了改变');  
           setTimeout(function(){
           	scope.$apply(function(){
           		scope.goodsNum = list.getAllGoodsNum();    
           	})
           },20);
	}, true);
	scope.goodsNum = list.getAllGoodsNum();*/

	//地址搜索
	scope.openDistribution = function(){//进入地址搜索框
		ionicModal.fromTemplateUrl('/widget/addreSearch.html', {
		    scope: scope,
		    animation: 'slide-in-up'
		}).then(function(modal) {
		    scope.modal = modal;
		    scope.modal.show(); //展示对话框
		});
	}
	

	if(list.getData()){
		scope.homedata = list.getData();
		//scope.bannList = list.getBannerData();
	  return;
	}

	list.getHttpData(function(res){
		var data = res.product_list.slice(1);
		var bannerData = res.product_list[0].images_list;//获取banner图片
		var cartlist = list.getCoreCartData();
		//console.log(cartlist);
		for(var i = 0; i < data.length;i++){
			data[i].num = 0;
			for(var key in cartlist){
				if(data[i].name === cartlist[key].name){
					data[i].num = cartlist[key].num; 
				}
			}
		}
		list.setData(data);
		//list.setBannerData(bannerData);
		//console.log(data);
		scope.homedata = data;
		//scope.bannList = bannerData;
	})
	
}]);