//这是项目入口js文件
var app = angular.module('fruitApp', ['ionic','ngRoute']);
//单页面开发，进行路由配置
app.config(function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl: '/view/home.html', //首页的视图
		controller: 'homeCtrl' //首页的控制层
	}).when('/info',{
		templateUrl:'/view/info.html',
		controller:'infoCtrl'
	}).when('/cart',{
		templateUrl:'/view/cart.html',
		controller:'cartCtrl'
	}).when('/address',{
		templateUrl:'/view/home.html',
		controller:'addressCtrl'
	}).otherwise({redirectTo: "/home"});
})
