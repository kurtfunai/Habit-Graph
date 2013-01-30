'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Habit Graph', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /habits when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/habits");
  });


  describe('habits', function() {

    beforeEach(function() {
      browser().navigateTo('#/habits');
    });


    it('should render habits when a user navigates to /habits', function() {
      expect(browser().location().url()).toBe("/habits");
    });
    
  });

});
