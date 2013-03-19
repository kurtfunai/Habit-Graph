'use strict';

/* Services */


var habitGraph = angular.module('habitGraph.services', ['ngResource']);
  
habitGraph.factory('Habit', function($resource){
    return {
      sources: $resource('habits/:habitId.json', {}, {
        query: {method:'GET', params:{habitId:'habits'}, isArray:true},
      }),
      format: function(habits){
        console.log(habits);
      }
    }      
  });

  // var injector = angular.injector(['habitGraph.services', 'ng']);
  // value('version', '0.1');
