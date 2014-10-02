angular.module('lodash', [])
  .factory('_', function() {
    return window._;
  });


angular.module('starter.controllers', ['lodash'])
  .controller('TimersCtrl', function($scope, _) {
    $scope.defaultTimer = {id:0, originalValue: 60, currentValue: 60, title: 'Timer 1', isRunning: false };

    $scope.timers = [ $scope.defaultTimer ];

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
      var newTimer;
      if ($scope.timers.length > 0 ) {
        newTimer = angular.copy($scope.timers[$scope.timers.length-1]);
      } else {
        newTimer = $scope.defaultTimer;
      }
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
