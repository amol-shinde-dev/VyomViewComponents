(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.custom-date-time-picker')
        .directive('comVyomVyomlibCustomDateTimePickerDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/custom-date-time-picker/com-vyom-vyomlib-custom-date-time-picker-design.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    // view component configuration will be stored in $scope.rxConfiguration.model

                    update();

                    // subscribe to rxData property change
                    $scope.rxConfiguration.model.on('change:rxData', update);

                    function update() {
                        $scope.label = $scope.rxConfiguration.model.prop('rxData/label');

                        $scope.time = "";

                    }




                }

            };
        });
})();
