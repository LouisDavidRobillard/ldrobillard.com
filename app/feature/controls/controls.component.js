(function () {
    'use strict';

    angular
        .module('app.controls')
        .component('ldControls', ldControls());

    function ldControls() {
        var component = {
            bindings: {
            },
            controller: ControlsController,
            templateUrl: 'app/feature/controls/controls.html'
        }
        return component;
    };

    ControlsController.$inject = [];

    function ControlsController() {
        var ctrl = this;
    }
})();