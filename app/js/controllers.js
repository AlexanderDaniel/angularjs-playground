'use strict';

/* Controllers */

function NavCtrl($scope) {
}

function GitHubSearchCtrl($scope) {
  $scope.gitHubRepos = function() {
    console.log('howdy!');
//    $scope.repos = GitHubRepos.get({keyword: 'scala'})
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
