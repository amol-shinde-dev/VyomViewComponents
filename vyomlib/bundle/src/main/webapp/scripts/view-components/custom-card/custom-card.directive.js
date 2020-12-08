(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.custom-card').directive('comVyomVyomlibCustomCard',
        function (rxViewComponentEventManager) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/custom-card/com-vyom-vyomlib-custom-card.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;
                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    // Getting the view component input parameters
                    _config = $scope.rxConfiguration.propertiesByName;

                    $scope.Colour = _config.Colour;
                    $scope.Height = _config.Height;
                    $scope.Width = _config.Width;
                    $scope.ImgHeight = _config.ImgHeight;
                    $scope.ImgWidth = _config.ImgWidth;
                    $scope.Text = _config.Text;
                    $scope.Icon = _config.Icon;
                    $scope.URL = _config.URL;

                    $scope.myFunction = function(){
                       // window.location = "https://developer6095.innovate.bmc.com/com.bmc.arsys.rx.innovationstudio/index.html#/app/view/com.vyom.Payslip:PaySlip%20Download";
                        if ($scope.URL  && $scope.URL.trim() != ''){
                            window.location = $scope.URL;
                        }

                    }
                    // $scope.displayOutputParameter = _config.inputParameter + ', hello world';
                    //
                    // eventManager.propertyChanged({
                    //     property: 'outputParameter',
                    //     oldValue: null,
                    //     newValue: $scope.displayOutputParameter
                    // });
                }
            };
        });
})();