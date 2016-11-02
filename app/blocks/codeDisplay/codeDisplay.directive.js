(function () {
    'use strict';

    angular
        .module('codeDisplay')
        .directive('ldCodeDisplay', ldCodeDisplayDirective);

    ldCodeDisplayDirective.$inject = ['$timeout', '$compile']

    function ldCodeDisplayDirective($timeout, $compile) {
        var controlAttribute = 'code-display-control';
        var directive = {
            restrict: 'A',
            scope: true,
            link: link
        };

        return directive;

        /**********************/
        function link(scope, element, attrs) {
            var control;
            $timeout(activate);

            function activate() {
                var el = element[0].querySelector('[' + controlAttribute + ']');
                control = angular.element(el);
                setInnerHtml();
                createAndPlaceCodeElement();
            }

            function setInnerHtml() {
                var el = angular.copy(control);
                el.removeAttr(controlAttribute);
                removeAttributes(el, /^ng-/);
                removeClasses(el, /^ng-/);

                scope.innerHtml = el[0].outerHTML;
            }

            function createAndPlaceCodeElement() {
                var el = angular.element('<code>{{innerHtml}}</code>');
                el = $compile(el)(scope);
                element.append(el);
            }
        }

        function removeAttributes(el, regexp) {
            var attrs = el[0].attributes;
            var toRemove = [];

            // iterate the attributes
            angular.forEach(attrs, function (val, key) {
                if (typeof val === 'object' &&
                    typeof val.name === 'string' &&
                    (regexp).test(val.name)) {
                    toRemove.push(val.name);
                }
            });

            for (var i = 0; i < toRemove.length; i++) {
                el.removeAttr(toRemove[i]);
            }
        }
        
        function removeClasses(el, regexp) {
            var classes = el[0].classList;
            var toRemove = [];

            // iterate the attributes
            angular.forEach(classes, function (val, key) {
                if (typeof val === 'string' &&
                    (regexp).test(val)) {
                    toRemove.push(val);
                }
            });

            for (var i = 0; i < toRemove.length; i++) {
                el.removeClass(toRemove[i]);
            }
        }
    }
})();
