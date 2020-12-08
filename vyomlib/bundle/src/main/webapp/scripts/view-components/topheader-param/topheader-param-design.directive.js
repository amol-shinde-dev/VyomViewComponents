(function () {
    'use strict';
    
    angular.module('com.vyom.vyomlib.view-components.topheader-param')
        .directive('comVyomVyomlibTopheaderParamDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/topheader-param/com-vyom-vyomlib-topheader-param-design.directive.html',

                scope: {
                    rxConfiguration: '='
                },

				link: function ($scope) {
					
				}
            };
        });
})();