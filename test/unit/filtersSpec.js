'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
  beforeEach(module('habitGraph.filters'));

  describe('urlencode', function() {
    it('should convert url encode strings',
        inject(function(urlencodeFilter) {
        expect(urlencodeFilter("Test String".toLowerCase())).toBe('test%20string');
    }));
  });
});
