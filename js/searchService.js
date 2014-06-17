window.appMock.service('searchService', [
    '$http', '$q',
    function ($http, $q) {
        this.getSearchResults = function (query) {

            //sends a http request with the following parameters
            return $http.get('/service/search');
        }
    }
]);