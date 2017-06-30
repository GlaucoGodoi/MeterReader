(function () {
    'use strict';

    angular
        .module('appReader')
        .controller('leftController', leftController);

    leftController.$inject = ['$location'];

    function leftController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'leftController';

        activate();

        function activate() { }
    }
})();
