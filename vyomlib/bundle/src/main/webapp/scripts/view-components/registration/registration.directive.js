(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.registration')
        .directive('comVyomVyomlibRegistration',
            function (rxViewComponentEventManager) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/registration/com-vyom-vyomlib-registration.directive.html',
                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _config;
                        var eventManager = rxViewComponentEventManager.getInstance($scope);
                        _config = $scope.rxConfiguration.propertiesByName;

                        // $scope.displayIP = _config.inputParameter;
                        // $scope.displayOP = _config.inputParameter;
                        // $scope.displayColor = _config.inputColor;

                        // eventManager.propertyChanged({
                        //     property: 'outputParameter',
                        //     oldValue: null,
                        //     newValue: $scope.displayOP
                        // });
                    }
                };
            });
})();

