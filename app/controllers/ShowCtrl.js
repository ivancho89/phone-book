angular.module('app.controllers')
  .controller('ShowCtrl', ['$scope', '$rootScope', 'CRUDService',
    function ($scope, $rootScope, CRUDService) {

        $scope.phones = [];

    	$scope.init = function(){	
    	   

            $scope.phones = CRUDService.getAll();
 
    	}

        $scope.removePhone = function(phoneId){

            CRUDService.remove(phoneId);
            $scope.init();
        }

        $scope.init();

    }
  ]);