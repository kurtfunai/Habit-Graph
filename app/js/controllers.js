'use strict';

/* Controllers */


function HabitListCtrl($scope, Habit) {
  $scope.habits = Habit.query();
}
//HabitListCtrl.$inject = [$scope, Habit];


function HabitDetailCtrl($scope, $routeParams, Habit) {
  $scope.habits = Habit.query();
  $scope.habit = Habit.get({habitId: $routeParams.habitId}, function(habit) {
    // Default Habit?
  });
}
// HabitDetailCtrl.$inject = [$scope, $routeParams, Habit];
