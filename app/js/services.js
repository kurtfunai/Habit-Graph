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
      },

      drawProductiveDaysChart: function(days){
        var productiveDaysData = [ 
          {
            key: "Cumulative Return",
            values: []
          }
        ];
        // Add the key and values for each day to the chart data
        for(var index in days) { 
          productiveDaysData[0]["values"].push({
            "label" : index ,
            "value" : days[index]
          })
        }
        
        this.drawBarChart(productiveDaysData, '#productive-days');
      },

      drawBarChart: function(data, divId) {
        nv.addGraph(function() {  
          var chart = nv.models.discreteBarChart()
              .x(function(d) { return d.label })
              .y(function(d) { return d.value })
              .staggerLabels(true)
              //.staggerLabels(historicalBarChart[0].values.length > 8)
              .tooltips(false)
              .showValues(true)

          d3.select(divId + ' svg')
              .datum(data)
              .transition().duration(500)
              .call(chart);

          nv.utils.windowResize(chart.update);

          return chart;
        });
      }
    }      
  });

  // var injector = angular.injector(['habitGraph.services', 'ng']);
  // value('version', '0.1');
