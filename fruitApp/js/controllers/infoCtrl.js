app.controller('infoCtrl',['$scope','$ionicModal',function(scope,ionicModal){
	     ionicModal.fromTemplateUrl('/widget/login.html', {
		     scope: scope,
		     animation: 'slide-in-up'
		 }).then(function(modal) {
		     scope.modal = modal;
		     scope.modal.show(); //展示对话框
		 });
		 scope.loginWithPhone = function(){
	 	     scope.modal.show(); 
		 }
	
}]);