app.directive('tabView',function(listService,$timeout){
	return{
		restrict:'E',  //自定义标签
		link:function(scope,element,attr){
			scope.getStatus = function(index){
				for(var i = 0;i < scope.list.length;i++){
					scope.list[i].active = false;
				}
				scope.list[index].active = true;
			};
			scope.list = [{
				link: '#/home',
				icon: 'ion-home',
				name: '首页',
				active: false
			},{
				link: '#/info',
				icon: 'ion-android-person',
				name: '个人信息',
				active: false
			},{
				link: '#/cart',
				icon: 'ion-ios-cart-outline',
				name: '购物车',
				active: false,
			},{
				link: '#home',
				icon: 'ion-gear-a',
				name: '品牌团',
				active: false
			}];
			for(var i = 0; i < scope.list.length;i++){
				if(location.hash === scope.list[i].link){
					scope.list[i].active = true;
				}
			}
			scope.goodsNum = listService.getAllGoodsNum();
			$timeout(function(){scope.data = listService.getcoreCartData();},1000)
				
			console.log(listService.coreCartData);
			
			scope.$watch('data',function(newvalue,oldvalue){
				console.log(111);
				setTimeout(function(){
		           	scope.$apply(function(){
		           		scope.goodsNum = listService.getAllGoodsNum(); 
		           	})
	           },20);
			},true);
			
		},
		templateUrl: '/widget/tab.html',
		replace: true,
		scope:{

		}
	}
})