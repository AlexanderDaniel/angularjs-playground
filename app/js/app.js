'use strict';

/* App Module */

angular.module('phonecat', ['phonecatFilters', 'phonecatServices'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/', {templateUrl: 'partials/nav.html', controller: NavCtrl}).
      when('/github/search', {templateUrl: 'partials/gitHubSearch.html', controller: GitHubSearchCtrl}).
      when('/phones', {templateUrl: 'partials/phone-list.html', controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/'});
  }]);
