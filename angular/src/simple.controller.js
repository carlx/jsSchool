(function() {
    'use strict';

    angular.module('simple')
        .controller('SimpleController', SimpleController);

    function SimpleController(SimpleFactory) {
        var vm = this;

        vm.test = function() {
            SimpleFactory.getText();
        }
    }

    SimpleController.$inject = ['SimpleFactory'];

})();