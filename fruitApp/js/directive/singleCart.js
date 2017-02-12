app.directive('singleCart',function(listService){
	return{
		restrict:'E',
		link:function(scope,ele,attr){
			scope.plus = function(){
				scope.item.num++;
				
			}
			scope.minus = function(){
				if (scope.item.num===0) {
					return;
				}
				scope.item.num--;
				
				
			}
			scope.$watch('item',function(newvalue,oldvalue){
				//console.log(scope.goodsNum)
				listService.setCart(newvalue,scope);
				//console.log(listService.getAllGoodsNum());
				//scope.goodsNum = listService.getAllGoodsNum();
				//console.log(scope.goodsNum);
			},true);
		},
		templateUrl:'/widget/cart.html',
		replace:true,
		scope:{
			list:'=list',
			index:'=index',
			item:'=item'
		}
	}
})