(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc13')
        .directive('comVyomVyomlibVc13Design', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/vc13/com-vyom-vyomlib-vc13-design.directive.html',

                scope: {
                    rxConfiguration: '='
                },


                link: function ($scope) {
                    // view component configuration will be stored in $scope.rxConfiguration.model

                    update();

                    // subscribe to rxData property change
                    $scope.rxConfiguration.model.on('change:rxData', update);

                    function update() {
                        $scope.buttonlabel = $scope.rxConfiguration.model.prop('rxData/buttonlabel');
                        $scope.icon = $scope.rxConfiguration.model.prop('rxData/buttonIcon');
                        $scope.allignment = $scope.rxConfiguration.model.prop('rxData/IconAllignment');
                        $scope.buttonIcon = "d-icon-" + $scope.allignment + "-" + $scope.icon;
                        $scope.size = $scope.rxConfiguration.model.prop('rxData/buttonSize');
                        $scope.buttonSize = "d-button_" + $scope.size;
                        $scope.bgcolor = $scope.rxConfiguration.model.prop('rxData/buttonColor');
                        $scope.buttonColor = " background-color:" + $scope.bgcolor + ";border-color:" + $scope.bgcolor;
                        $scope.color = $scope.rxConfiguration.model.prop('rxData/buttonTextColor');

                        $scope.buttonTextColor = ";color:white";
                        $scope.fF = $scope.rxConfiguration.model.prop('rxData/fontFamily');
                        $scope.fontFamily = ";font-family:" + $scope.fF + ";";
                        $scope.style = "" + $scope.fontFamily;


                    }




                }
            };
        });
})();
