(function () {
    'use strict';
    
    angular.module('com.vyom.vyomlib.view-components.topheader')
        .directive('comVyomVyomlibTopheaderDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/topheader/com-vyom-vyomlib-topheader-design.directive.html',

                scope: {
                    rxConfiguration: '='
                },

				link: function ($scope) {
					
				}
            };
        });
})();