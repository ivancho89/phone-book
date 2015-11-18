app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
		.otherwise("/");
		$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "partials/Home/landing.html",
			controller: 'HomeCtrl',
		})
		.decorator('$uiViewScroll', function ($delegate) {
		
		})
		.state('addPhone', {
			url: "/add-phone",
			templateUrl: "partials/CRUD/add.html",
			controller: 'AddCtrl'
		})
		.decorator('$uiViewScroll', function ($delegate) {
		
		})
		.state('showPhoneList', {
			url: "/list-phones",
			templateUrl: "partials/CRUD/list.html",
			controller: 'ShowCtrl'
		})
		.decorator('$uiViewScroll', function ($delegate) {
		
		})
		.state('editPhone', {
			url: "/edit-phone/:id",
			templateUrl: "partials/CRUD/add.html",
			controller: 'AddCtrl'
		})
		.decorator('$uiViewScroll', function ($delegate) {
		
		})
})
