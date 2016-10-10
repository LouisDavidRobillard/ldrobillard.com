(function () {
    'use strict';

    angular
        .module('app.coverCalc')
        .component('ldCoverCalc', ldCoverCalc());

    function ldCoverCalc() {
        var component = {
            bindings: {
            },
            controller: CoverCalcController,
            templateUrl: 'app/features/coverCalc/coverCalc.html'
        }
        return component;
    };

    CoverCalcController.$inject = [];

    function CoverCalcController() {
        var ctrl = this;
    }
})();