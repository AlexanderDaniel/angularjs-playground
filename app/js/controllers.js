'use strict';

/* Controllers */

function PhoneListCtrl($scope, Phone, GitHubRepos) {
    $scope.preference = 'color';

    $scope.colors = [
        {id: 1, name: 'black', shade: 'dark'},
        {id: 2, name: 'white', shade: 'light'},
        {id: 3, name: 'red', shade: 'dark'},
        {id: 4, name: 'blue', shade: 'dark'},
        {id: 5, name: 'yellow', shade: 'light'}
    ];
    $scope.color = 3;

    $scope.names = [
        {id: 1, firstName: 'Alex'},
        {id: 2, firstName: 'Martin'},
        {id: 3, firstName: 'James'}
    ];

    $scope.$watch('preference', function(newValue) {
       if (newValue==='name' && !$scope.name) {
           console.log('Setting name to 1');
           $scope.name = 1;
       }
    });

    $scope.isNumber = function (n) {
        return angular.isNumber(n);
    };

    $scope.gitHubRepos = function () {
        console.log('howdy!');
//    $scope.repos = GitHubRepos.get({keyword: 'scala'})
    }
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];


function PhoneDetailCtrl($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function (imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
