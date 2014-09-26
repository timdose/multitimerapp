angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.timers = [
    {originalValue: 300, currentValue: 300, title: 'Timer 1' },
    {originalValue: 500, currentValue: 500, title: 'Timer 2' }
  ];

  $scope.startTimer = function(timer){
    timer.interval = setInterval(function() {
      timer.currentValue = timer.currentValue - 1;
      $scope.$apply();
      if (timer.currentValue === 0 ) {
        $scope.endTimer(timer);
        clearInterval(timer.interval);
      }
    }, 1000 );
  };

  $scope.endTimer = function(timer){
    console.log(timer.title + " Finished!");
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
