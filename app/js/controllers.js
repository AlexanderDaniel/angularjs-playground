'use strict';

/* Controllers */

function NavCtrl($scope) {
}

function GitHubSearchCtrl($scope, GitHubRepos) {
  $scope.gitHubRepos = function() {
    $scope.repos = GitHubRepos.get({keyword: $scope.keyword}, function(data) {
      $scope.repos = data.repositories;
    })
  }
}

function PhoneListCtrl($scope, Phone, GitHubRepos) {
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];



function PhoneDetailCtrl($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];


function NumberCtrl($scope) {
  $scope.model = {
    number: 1.23
  }
}
