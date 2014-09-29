angular.module('starter.filters', [])
.filter('prettyTime', function() {
  return function(input) {
    return input + 's';
  };
});