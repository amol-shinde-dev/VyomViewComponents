(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.hierarchy')
        .directive('comVyomVyomlibHierarchy',
            function (rxViewComponentEventManager) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/hierarchy/com-vyom-vyomlib-hierarchy.directive.html',
                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _config;

                        _config = $scope.rxConfiguration.propertiesByName;


                    }
                };
            });
})();
