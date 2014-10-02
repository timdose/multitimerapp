angular.module('lodash', [])
  .factory('_', function() {
    return window._;
  });


angular.module('starter.controllers', ['lodash'])
  .controller('DashCtrl', function($scope, _) {

    $scope.timers = [
      {id:0, originalValue: 300, currentValue: 300, title: 'Timer 1', isRunning: false },
      {id:1, originalValue: 500, currentValue: 500, title: 'Timer 2', isRunning: false }
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
      newTimer.currentValue = newTimer.originalValue;
      newTimer.id++;
      $scope.timers.push(newTimer);
    }

    $scope.deleteTimer = function(timerId) {
      console.log(timerId);
      console.log($scope.timers);
      // console.log(_($scope.timers).filter({id:timerId}))
      $scope.timers = _($scope.timers).reject({id:timerId});
      console.log($scope.timers);
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
