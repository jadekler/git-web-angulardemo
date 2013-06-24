// One of the hardest concepts in AngularJS. See more info about directives at:
// http://amitgharat.wordpress.com/2013/06/08/the-hitchhikers-guide-to-the-directive/
// http://onehungrymind.com/angularjs-directives-basics/
// http://www.youtube.com/watch?feature=player_embedded&v=Yg-R1gchccg
define(['angular', 'services'], function(angular, services) {
	'use strict';

	angular.module('myApp.directives', ['myApp.services']).directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
		};
	}]);
});