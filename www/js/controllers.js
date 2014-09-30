angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.timers = [
    {originalValue: 300, currentValue: 300, title: 'Timer 1', isRunning: false },
    {originalValue: 500, currentValue: 500, title: 'Timer 2', isRunning: false }
  ];

  $scope.startTimer = function(timer){
    timer.isRunning = true;
    timer.currentValue = timer.currentValue - 1;
    timer.interval = setInterval(function() {
      timer.currentValue = timer.currentValue - 1;
      $scope.$apply();
      if (timer.currentValue === 0 ) {
        $scope.endTimer(timer);
        clearInterval(timer.interval);
      }
    }, 1000 );
  };

  $scope.pauseTimer = function(timer){
    timer.isRunning = false;
    clearInterval(timer.interval);
  };

  $scope.resetTimer = function(timer){
    timer.currentValue = timer.originalValue;
  }

  $scope.endTimer = function(timer){
    console.log(timer.title + " Finished!");
  }

  $scope.addTimer = function() {
    var newTimer = angular.copy($scope.timers[$scope.timers.length-1]);
    $scope.timers.push(newTimer);
  }
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
