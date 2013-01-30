'use strict';

/* jasmine specs for controllers go here */

beforeEach(module('habitGraph.services'));
beforeEach(function(){
  this.addMatchers({
    toEqualData: function(expected) {
      return angular.equals(this.actual, expected);
    }
  });
});

describe('HabitListCtrl', function(){
  var scope, ctrl, $httpBackend;

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('habits/habits.json').
        respond([{name: 'Habit 1'}, {name: 'Habit 2'}]);

    scope = $rootScope.$new();
    ctrl = $controller(HabitListCtrl, {$scope: scope});
  }));


  it('should create "habits" model with 2 habits fetched from xhr', function() {
    expect(scope.habits).toEqual([]);
    $httpBackend.flush();

    expect(scope.habits).toEqualData(
        [{name: 'Habit 1'}, {name: 'Habit 2'}]);
  });
});


describe('HabitDetailCtrl', function(){
  var scope, ctrl, $httpBackend, 
    xyzHabit = function() {
      return {
        name: 'xyzHabit'
      }
    };

  beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
    $httpBackend = _$httpBackend_;
    
    $httpBackend.expectGET('habits/habits.json').respond([{name: 'Habit 1'}, {name: 'Habit 2'}]);
    $httpBackend.expectGET('habits/xyz.json').respond(xyzHabit());

    $routeParams.habitId = 'xyz';
    scope = $rootScope.$new();
    ctrl = $controller(HabitDetailCtrl, {$scope: scope});
  }));

  it('should create "habits" model with 2 habits fetched from xhr', function() {
    expect(scope.habits).toEqual([]);
    $httpBackend.flush();

    expect(scope.habits).toEqualData(
        [{name: 'Habit 1'}, {name: 'Habit 2'}]);
  });

  it('should fetch habit details', function() {
    expect(scope.habit).toEqualData({});
    $httpBackend.flush();

    expect(scope.habit).toEqualData(xyzHabit());
  });
});