window.app.controller('searchController', [
    '$scope', 'searchResults',
    function ($scope, searchResults) {
        console.log('Inside Search Controller');
        $scope.userCollection = searchResults.data;
    }
]);