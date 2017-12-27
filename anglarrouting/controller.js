var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		// template:'first routing page'
		templateUrl:'/home.html'
	})
	.when('/second',{
		templateUrl:'/second.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});