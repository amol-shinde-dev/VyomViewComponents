
(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.custom-html')
        .directive('comVyomVyomlibCustomHtml',

                   function ($window) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/custom-html/com-vyom-vyomlib-custom-html.directive.html',

            scope: {
                rxConfiguration: '='
            },

                 link: function ($scope) {
                var _config;

                var init = function () {
                    _config = $scope.rxConfiguration.propertiesByName;
                   
                   
                    $scope.customHTMLscript = _config.customHTMLscript;
                    
              
                    

                };



             





                init();

            }

        };
    });
})();