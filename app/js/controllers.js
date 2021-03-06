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
 
function HabitDetailCtrl($scope, $routeParams, Habit, Moment) {
  $scope.habit = Habit.sources.get({habitId: $routeParams.habitId}, function(habit) {
    $scope.habit.createdAt = Moment($scope.habit.createdAt.substr(0,10), 'YYYY-MM-DD').format('MMMM Do YYYY')
    var productiveDays = Habit.getProductiveDays($scope.habit.completed);  
    Habit.drawProductiveDaysChart(productiveDays);
    Habit.drawProductiveMonthsChart($scope.habit.productiveMonths);
  });
}
// HabitDetailCtrl.$inject = [$scope, $routeParams, Habit, Moment];
