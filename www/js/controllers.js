angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.timers = [
    {value: 300, title: 'Timer 1'},
    {value: 500, title: 'Timer 2'}
  ];
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
