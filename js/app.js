window.app = angular.module('routeResolve', [
    'ngRoute',
    'mockService'
]);

window.appMock = angular.module('mockService', ['ngMockE2E']);

window.app.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/search/:searchString', {
                templateUrl: 'partials/search.html',
                controller: 'searchController',
                resolve: {
                    searchResults: ['$route', 'searchService', function ($route, searchService) {
                        return searchService.getSearchResults($route.current.params);
                    }]
                }
            });

    }
]);
