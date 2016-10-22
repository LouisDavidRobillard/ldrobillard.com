(function () {
    'use strict';

    angular
       .module('app')
       .run(run);

    run.$inject = ['$rootScope'];

    function run($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.pageTitle = current.pageTitle;
            document.body.classList.remove('nav-active');
        });
    }
})();