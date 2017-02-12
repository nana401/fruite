app.controller('addressCtrl',['$scope','$ionicModal','addressService',function(scope,ionicModal,addressData){
	scope.hide = function(){
		scope.modal.remove();
	}

	scope.chooseCity = function(){
		//城市显示页面
		ionicModal.fromTemplateUrl('/widget/city.html', {
		    scope: scope,
		    animation: 'slide-in-up'
		}).then(function(modals) {
			scope.modals = modals;
		    scope.modals.show(); //展示对话框
		    console.log(modals);
		});
		addressData.getHttpData(function(res){
			console.log(res);
		})
	}
	scope.editorRegion = function(){

	}

}]);