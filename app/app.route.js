(function () {
    'use strict';

    angular
       .module('app')
       .config(routeConfig);

    routeConfig.$inject = ['$locationProvider', '$routeProvider'];

    function routeConfig($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                pageTitle: 'Accueil',
                template: '<ld-resume></ld-resume>',
            })
            .when('/calculateur', {
                pageTitle: 'Calculateur de revêtement',
                template: '<ld-cover-calc></ld-cover-calc>'
            })
            .when('/controls', {
                pageTitle: 'Contrôles',
                template: '<ld-controls></ld-controls>'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }
})();