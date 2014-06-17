//var app = angular.module('routeResolve', []);
app.controller('homeController', [
    '$scope', '$location',
    function ($scope, $location) {

        $scope.searchString = '';

        $scope.doSearch = function ($event) {
            if ($event.keyCode === 13) {
                $location.path('/search/' + $scope.searchString);
            }
        };
    }
]);
