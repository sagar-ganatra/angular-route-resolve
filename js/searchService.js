window.appMock.service('searchService', [
    '$http',
    function ($http) {
        this.getSearchResults = function () {

            //sends a http request with the following parameters
            return $http.get('/service/search');
        }
    }
]);