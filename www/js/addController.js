angular.module('addCtrl', [])

.controller('AddCtrl',
  ['$scope','$localStorage','$ionicHistory',
  function($scope, $localStorage,$ionicHistory) {

    // Setting the reference to localStorage
    $scope.$storage = $localStorage;
    
    // Initialization of model
    $scope.user = {};
    $scope.user.name = '';
    $scope.user.value = "0";
    

    /*
    * Function to add a member
    */
    $scope.addName = function(nameOfUser){
      
      // Validating data
      if ($scope.user.name == ''){
        alert("Debe ingresar un Nombre no vacío");
       return;
      }
     if (_.find($scope.$storage.users,{"name":nameOfUser})){
        alert("El miembro ya existe");
        return;
      }
      
      // Saving data and going to Main View
      $scope.$storage.users.push($scope.user);
      $ionicHistory.goBack();
      
    };

}]);