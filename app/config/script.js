

var app = angular.module('monModule', []);

app.controller('controller1', function(){

	console.log('controller1');
});


app.controller('controller2', function(){

	console.log('controller2');
});

app.controller('parentCtrl',function($scope){

$scope.$watch('username', function(newValue, oldValue){

	console.log(newValue, oldValue);
});



});