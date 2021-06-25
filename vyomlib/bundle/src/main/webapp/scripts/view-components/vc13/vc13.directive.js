(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc13')
        .directive('comVyomVyomlibVc13',

            function ($document, $timeout, rxNotificationMessage, rxString) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/vc13/com-vyom-vyomlib-vc13.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _config;

                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName;
                            $scope.buttonGuid = _config.buttonGuid;
                            $scope.buttonlabel = _config.buttonlabel;
                            $scope.buttonColor = _config.buttonColor;

                            $scope.buttonTextColor = ";color:" + _config.buttonTextColor;
                            $scope.buttonIcon = "d-icon-" + _config.IconAllignment + "-" + _config.buttonIcon;


                            $scope.buttonSize = "d-button_" + _config.buttonSize;
                            $scope.fontFamily = ";font-family:" + _config.fontFamily + ";";
                            $scope.buttonStyle = {};
                            $scope.buttonStyle = buttonStyle();



                            $scope.btnColor = _config.buttonColor;
                            $scope.btnTextColor = _config.buttonTextColor;
                            $scope.btSize = _config.buttonSize + "px";
                            $scope.btnFontFamily = _config.fontFamily;



                        };



                        $scope.clickButton = function () {

                            $timeout(function () {
                                var button;

                                var buttonGuid = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', $scope.buttonGuid);

                                button = $document.find(buttonGuid);


                                if (button) {
                                    button.click();
                                } else {
                                    rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid);
                                }
                            });
                        };

                        function buttonStyle() {
                            var b = {};


                            b = {
                                icon: $scope.buttonSize + " " + $scope.buttonIcon,
                                style: $scope.buttonTextColor + "" + $scope.fontFamily
                            };


                            return b;
                        }

                        init();

                    }

                };
            });
})();
