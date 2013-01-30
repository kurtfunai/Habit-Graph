'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('habitGraph.services', ['ngResource']).
  factory('Habit', function($resource){
    return $resource('habits/:habitId.json', {}, {
      query: {method:'GET', params:{habitId:'habits'}, isArray:true}
    })
  });

  // var injector = angular.injector(['habitGraph.services', 'ng']);
  // value('version', '0.1');
