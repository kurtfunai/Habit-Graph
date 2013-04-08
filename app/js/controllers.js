'use strict';

/* Controllers */


function HabitListCtrl($scope, Habit) {
  $scope.habits = Habit.sources.query();
  $scope.predicate = 'name'; // Sort habits by name or [createdAt, completionPercentage]

  $scope.sort = function(col) {
    $scope.predicate = $scope.predicate == col ? '-' + col : col;
  };
}
//HabitListCtrl.$inject = [$scope, Habit];

function HabitNoDetailCtrl($scope, Habit) {
  $scope.habits = Habit;
  Habit.format();
}
// HabitNoDetailCtrl.$inject = [$scope, Habit];
 
function HabitDetailCtrl($scope, $routeParams, Habit) {
  $scope.habit = Habit.sources.get({habitId: $routeParams.habitId}, function(habit) {
    var productiveDays = Habit.getProductiveDays($scope.habit.completed);  
    Habit.drawProductiveDaysChart(productiveDays);
    Habit.drawProductiveMonthsChart($scope.habit.productiveMonths);
  });
}
// HabitDetailCtrl.$inject = [$scope, $routeParams, Habit];
