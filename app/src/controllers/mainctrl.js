app.controller('mainCtrl', function($scope, $http){
	$http.get('app/resources/serveur.php', 
	{
		params: {method: 'getAuteurs'}
	}).then(function(result) {
		$scope.authors = result.data;
	})
	$scope.hideAdd = function(){
		$scope.addForm = false;
		$scope.addName = "";
		$scope.addFirstName = "";
		$scope.addTitle = "";
	}
	$scope.showAdd = function(){
		$scope.addForm = true;
	}
	$scope.submitAdd = function(){
		$http.get('app/resources/serveur.php', 
		{
			params: {method: 'addAuteur', nom:$scope.addName, prenom:$scope.addFirstName, fonction:$scope.addTitle}
		}).then(function(result) {
			$scope.addName = "";
			$scope.addFirstName = "";
			$scope.addTitle = "";
			$scope.hideAdd();
			$http.get('app/resources/serveur.php', 
			{
				params: {method: 'getAuteurs'}
			}).then(function(result) {
				$scope.authors = result.data;
			})
		})
	}
	
	}
})