// A module is a place where you can collect and organize things like controllers, services, directives, and filters
define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers'
	], function (angular, filters, services, directives, controllers) {
		'use strict';

		// Create a module called myApp with our controllers, filters, services, and directives
		return angular.module('myApp', ['myApp.controllers', 'myApp.filters', 'myApp.services', 'myApp.directives']);
});
