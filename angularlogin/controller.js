var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'form.html',
		controller: 'logincontroller'
	})
	.when('/example',{
		templateUrl: 'example.html',
		controller: 'logincontroller'
	})
	.otherwise({
		redirectTo:'/'
	});
	
});

app.controller('logincontroller', function($scope,$location){
	$scope.proceed = function(){
		var uname = $scope.username;
		var password = $scope.password;
			if(uname=='sarthak' && password=='iamtheboss'){
				$location.path('/example');
		}
		else{
		alert('have some almonds');
		}
	}

})