(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.kanban1').directive('comVyomVyomlibKanban1',
        function (rxViewComponentEventManager,$document,$timeout,rxNotificationMessage,rxString,$window) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/kanban1/com-vyom-vyomlib-kanban1.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;
                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    // Getting the view component input parameters
                    _config = $scope.rxConfiguration.propertiesByName;

                    $scope.Colour = _config.Colour;
                    $scope.buttonGuid1 = _config.buttonGuid1;
                    $scope.ViewGuid = _config.ViewGuid;
                    $scope.CreateTicket = _config.CreateTicket;

                    $window.clickButton1 = function () {
                 
                        $timeout(function(){
                            var button;

                                var buttonGuid1 = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', $scope.buttonGuid1);

                                button = $document.find(buttonGuid1);
                            

                            if (button) {
                                button.click();
                            } else {
                                rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid1);
                            }
                        });
                    };

                    $scope.ViewButton = function () {
                 
                        $timeout(function(){
                            var button;

                                var ViewGuid = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', $scope.ViewGuid);

                                button = $document.find(ViewGuid);
                            

                            if (button) {
                                button.click();
                            } else {
                                rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid1);
                            }
                        });
                    };

                    $scope.CreateTicket = function () {
                 
                        $timeout(function(){
                            var button;

                                var ViewGuid = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', $scope.ViewGuid);

                                button = $document.find(ViewGuid);
                            

                            if (button) {
                                button.click();
                            } else {
                                rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid1);
                            }
                        });
                    };





                    function openForm() {
                        document.getElementById("myForm").style.display = "block";
                      }
                      
                      function closeForm() {
                        document.getElementById("myForm").style.display = "none";
                      }


                }
            };
        });
})();