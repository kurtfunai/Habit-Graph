'use strict';


// Declare app level module which depends on filters, and services
angular.module('habitGraph', ['habitGraph.filters', 'habitGraph.services', 'habitGraph.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/habits', {templateUrl: 'partials/habits.html', controller: HabitNoDetailCtrl});
    $routeProvider.when('/habits/:habitId', {templateUrl: 'partials/habits.html', controller: HabitDetailCtrl});
    $routeProvider.otherwise({redirectTo: '/habits'});
  }]);
