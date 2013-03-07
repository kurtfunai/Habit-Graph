'use strict';

/* Controllers */


function HabitListCtrl($scope, Habit) {
  $scope.habits = Habit.sources.query();
  $scope.predicate = 'name'; // Sort habits by name
  Habit.format([1,2]);

  $scope.sort = function(col) {
    $scope.predicate = $scope.predicate == col ? '-' + col : col;
  };
}
//HabitListCtrl.$inject = [$scope, Habit];

function HabitNoDetailCtrl($scope, Habit) {
    $scope.habits = Habit;
}
// HabitNoDetailCtrl.$inject = [$scope, Habit];
 
function HabitDetailCtrl($scope, $routeParams, Habit) {
  if ($routeParams.habitId) {
    $scope.habit = Habit.sources.get({habitId: $routeParams.habitId}, function(habit) {
      // Format habit
    });
  }
}
// HabitDetailCtrl.$inject = [$scope, $routeParams, Habit];
