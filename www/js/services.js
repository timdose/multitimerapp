angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff', height: '3\' 4"' },
    { id: 1, name: 'G.I. Joe', height: '6\' 6"' },
    { id: 2, name: 'Miss Frizzle', height: '5\' 6"' },
    { id: 3, name: 'Ash Ketchum', height: '5\' 11"' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
