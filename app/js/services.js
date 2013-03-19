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
      },
      getProductiveDays: function(dates){
        var days = {
          Monday: 0,
          Tuesday: 0,
          Wednesday: 0,
          Thursday: 0,
          Friday: 0,
          Saturday: 0,
          Sunday: 0
        };
        dates.forEach(function(date){
          days[moment(date.substr(0,10), 'YYYY-MM-DD').format('dddd')]++;
        });
        return days;
      }
    }      
  });

  // var injector = angular.injector(['habitGraph.services', 'ng']);
  // value('version', '0.1');
