angular.module('app.controllers')
  .controller('AddCtrl', ['$scope', '$rootScope', '$stateParams', 'CRUDService',
    function ($scope, $rootScope, $stateParams, CRUDService) {


    	$scope.phone = {

    		name:'',
    		description:'',
    		batteryType:'',
    		talkTime:'',
    		standByTime:'',
    		memory:'',
    		storage:'',
    		OSVersion:'',
    		WiFi:'',
    		bluetooth:''

    	}
    	$scope.showSuccessMessage = false;
    	$scope.editMode = false;
    	$scope.title = 'Add a new phone!';
    	$scope.buttonText = "Add One";


    	$scope.init = function() {

    		if($stateParams.id && $stateParams.id != ''){

    			$scope.title = 'Edit Phone';
    			$scope.buttonText ="Save";
    			$scope.phone = CRUDService.getPhoneById($stateParams.id);
    			$scope.editMode = true;

    		}
    		
    	}

    	$scope.addNewPhone = function(){	
    	
    		if( !$scope.form.$error.required){

    			if(!$scope.editMode){
    				$scope.phone.id = $scope.randomId();
    			}
    			
    			CRUDService.add($scope.phone);
	    		$scope.showSuccessMessage = true;

    		}
    	}

    	$scope.randomId = function() {

		    var S4 = function() {

		       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		    };

		    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
		}

		$scope.init();



    }
  ]);