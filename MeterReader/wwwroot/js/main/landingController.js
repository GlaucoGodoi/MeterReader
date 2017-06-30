(function () {
    'use strict';

    angular
        .module('appReader')
        .controller('landingController', landingController);

    landingController.$inject = ['$location', '$mdSidenav', '$log'];

    function landingController($location, $mdSidenav, $log) {
        /* jshint validthis:true */
        var vm = this;
        vm.actions = {
            toggleLeft: toggleLeft
        };

        activate();

        function activate() { }

        function toggleLeft() {
            buildDelayedToggler('left')
        }

        function buildDelayedToggler(navID) {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }
    }
})();
