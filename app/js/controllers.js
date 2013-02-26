'use strict';

/* Controllers */


function HabitListCtrl($scope, Habit) {
  $scope.habits = Habit.query();
  $scope.predicate = 'name';

  $scope.sort = function(col) {
    $scope.predicate = $scope.predicate == col ? '-' + col : col;
  };
}
//HabitListCtrl.$inject = [$scope, Habit];


function HabitDetailCtrl($scope, $routeParams, Habit) {
  if ($routeParams.habitId) {
    $scope.habit = Habit.get({habitId: $routeParams.habitId}, function(habit) {
    });
  }
}
// HabitDetailCtrl.$inject = [$scope, $routeParams, Habit];
