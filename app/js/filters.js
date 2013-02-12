'use strict';

/* Filters */

angular.module('habitGraph.filters', []).
  filter('urlencode', function() {
    return function(input) {
      return escape(input.toLowerCase());
    };
  })

  .filter('sort', function(col) {
      return 
  });