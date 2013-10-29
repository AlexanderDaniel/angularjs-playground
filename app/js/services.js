'use strict';

/* Services */

angular.module('phonecatServices', ['ngResource'])
  .factory('Phone', function ($resource) {
    return $resource('phones/:phoneId.json', {}, {
      query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
    });
  })
  .factory('GitHubRepos', function ($resource) {
    return $resource('https://api.github.com/legacy/repos/search/:keyword')
  })
  .factory('Math', function() {
    return  {
      abs: function(x) {
        return x>0 ? x : -x;
      }
    }
  });
