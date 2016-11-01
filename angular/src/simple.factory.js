(function() {
    'use strict';

    angular.module('simple')
        .factory('SimpleFactory', SimpleFactory);

    SimpleFactory.$inject = ['$log', '$http'];

    function SimpleFactory($log, $http) {
        return {
            showSomething: function() {
                $log.info('hello');
            },
            getAlbum: function () {
                return $http.get('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj');
            },
            getText: function() {
                return 'text';
            }
        };
    }

})();