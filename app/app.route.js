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
                module: 'resume',
                template: '<ld-resume></ld-resume>',
            })
            .when('/calculateur', {
                pageTitle: 'Calculateur de revêtement',
                module: 'cover-calculator',
                template: '<ld-cover-calc></ld-cover-calc>'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }
})();