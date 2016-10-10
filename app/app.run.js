(function () {
    'use strict';

    angular
       .module('app')
       .run(run);

    run.$inject = ['$rootScope'];

    function run($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.pageTitle = current.pageTitle;
            $rootScope.currentModule = current.module;
        });
    }
})();