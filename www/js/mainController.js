angular.module('mainCtrl', [])

.controller('MainCtrl', 
	['$scope','$localStorage','$state',
	function($scope, $localStorage,$state) {
	  
	  // Setting the reference to localStorage
	  $scope.$storage = $localStorage;

	  // Initialization for localStorage use, if neccesary
	  if (!$scope.$storage.users) $scope.$storage.users = [];

	  /*
	  *	Function to increase the value of a user
	  */
		$scope.increase = function(user){
			$scope.$storage.users[_.findIndex($scope.$storage.users,{name:user})].value++;
		};

		/*
		*	Function to go to Add Module
		*/
		$scope.goToAdd = function(){
			$state.go('add');
		};

		/*
		*	Function to reset every value of user to 0
		*/
		$scope.resetLocalStorage = function(){
			_.each($scope.$storage.users,function(user){
				user.value = 0;
			});
		};

		/*
		*	Function to make a full reset and erase everything
		* from localStorage and setting the array to empty (not deleting it)
		*/
		$scope.fullReset = function(){
			$localStorage.$reset();
			$scope.$storage.users = [];
		};

}]);
