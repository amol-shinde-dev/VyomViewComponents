(function () {
    'use strict';
    
    angular.module('com.vyom.vyomlib.view-components.simple-widget')
        .directive('comVyomVyomlib2SimpleWidgetDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/simple-widget/com-vyom-vyomlib-simple-widget-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();