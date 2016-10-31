(function () {
    'use strict';

    angular
        .module('materialButton')
        .directive('ldRippleEffect', ldRippleEffectDirective);

    ldRippleEffectDirective.$inject = ['$window', '$timeout']

    function ldRippleEffectDirective($window, $timeout) {
        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        /**********************/
        function link(scope, element, attrs) {
            element.bind('click', function (event) {
                var ripple = angular.element('<div class="ripple"></div>'),
                   xPos = event.pageX - element[0].getBoundingClientRect().left,
                   yPos = event.pageY - element[0].getBoundingClientRect().top;
                ripple.css({
                    'top': (yPos - element[0].clientHeight / 2) + 'px',
                    'left': (xPos - element[0].clientHeight / 2) + 'px'
                });
                element.append(ripple);
                $timeout(function () { ripple.remove(); }, 2000);
            });
        }
    }
})();