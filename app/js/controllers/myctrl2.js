define([], function() {
	return ['$scope', '$http', function($scope, $http) {
		// You can access the scope of the controller from here
		$scope.welcomeMessage = 'hey this is myctrl2.js!';

		// Because this has happened async (due to injection), we've missed 
		// Angular's initial call to $apply after the controller has been loaded 
		// hence we need to explicitly call it at the end of our Controller
		// constructor
		$scope.$apply();
	}];
});