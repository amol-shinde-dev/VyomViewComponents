(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc11')
        .directive('comVyomVyomlibVc11',

            function (rxRecordInstanceDataPageResource, rxRecordInstanceResource, $window, rxViewComponentEventManager, rxCurrentUser, $timeout, rxString, $document, rxNotificationMessage, $sce) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/vc11/com-vyom-vyomlib-vc11.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _config;

                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName;
                            $scope.count1 = _config.count1;
                            $scope.count2 = _config.count2;
                            $scope.count3 = _config.count3;
                            $scope.actionguid1 = _config.actionguid1;
                            $scope.actionguid2 = _config.actionguid2;
                            $scope.actionguid3 = _config.actionguid3;
                            $scope.innerBlockWidth = _config.innerBlockWidth;
                            $scope.note1 = _config.note1;
                            $scope.note2 = _config.note2;
                            $scope.note3 = _config.note3;
                            $scope.Color1 = _config.Color1;
                            $scope.Color2 = _config.Color2;
                            $scope.Color3 = _config.Color3;
                            $scope.header1 = _config.header1;
                            $scope.header2 = _config.header2;
                            $scope.header3 = _config.header3;

                            $scope.innerBlockWidthstyle = _config.innerBlockWidth + "px";

                        };




                        // <!----------- buit in functions------------------>

                        $scope.callAction = function (actionname) {
                            if (actionname == "Saction") {
                                $scope.executeAction($scope.actionguid1);

                            } else if (actionname == "Iaction") {
                                $scope.executeAction($scope.actionguid2);

                            } else if (actionname == "Caction") {
                                $scope.executeAction($scope.actionguid3);

                            }


                        }
                        //redirect to differnt url
                        $scope.redirecturl = function (redurl) {
                            // $window.location.href=redurl;
                            $window.open(redurl, '_blank');
                        };

                        $scope.executeAction = function (guid) {

                            $timeout(function () {
                                var button;


                                // We are looking for the rx-action-button with the given Guid and then the button embedded inside of it.
                                var buttonGuid = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', guid);

                                button = $document.find(buttonGuid);


                                if (button) {
                                    button.click();
                                } else {
                                    rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid);
                                }
                            });
                        }




                        init();

                    }

                };
            });
})();
