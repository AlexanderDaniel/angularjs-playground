'use strict';

/* Controllers */

function PhoneListCtrl($scope, Phone, GitHubRepos) {
  $scope.gitHubRepos = function() {
    console.log('howdy!')
//    $scope.repos = GitHubRepos.get({keyword: 'scala'})
  }
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
