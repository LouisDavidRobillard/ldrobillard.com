(function () {
    'use strict';

    angular
        .module('app.resume')
        .component('ldResume', ldResume());

    function ldResume() {
        var component = {
            bindings: {
            },
            controller: ResumeController,
            templateUrl: 'app/feature/resume/resume.html'
        }
        return component;
    };

    ResumeController.$inject = ['$element'];

    function ResumeController($element) {
        var ctrl = this;
        ctrl.fullpageOptions = {
            menu: '#menu',
            anchors: ['section_1', 'section_2', 'section_3', 'section_4', 'section_5'],
            lockAnchors: true
        }

        ////////////////
        //
    }

})();