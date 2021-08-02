(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.service-health')
        .directive('comVyomVyomlibServiceHealth',
            function (rxRecordInstanceDataPageResource, rxViewComponentEventManager, $timeout, rxString, $document) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/service-health/com-vyom-vyomlib-service-health.directive.html',
                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _config;

                        function init() {
                            _config = $scope.rxConfiguration.propertiesByName;
                            $scope.eventManager = rxViewComponentEventManager.getInstance($scope);
                            $scope.cardActionGuid = _config.cardActionGuid;

                            $scope.textData2 = [];
                            $scope.textData3 = [];

                            $scope.cfg = {};
                            $scope.cfg.recordDefinitionName = _config.recordDefinitionName;
                            $scope.incident = {};
                            $scope.incident.incidentRecordDefinition = _config.incidentRecordDefinition;
                            $scope.change = {};
                            $scope.change.changeRecordDefinition = _config.changeRecordDefinition;
                            //service
                            $scope.cardName = _config.cardName;
                            $scope.status = _config.status;
                            $scope.time = _config.time;
                            $scope.availablePercent = _config.availablePercent;
                            //incident
                            $scope.incNumber = _config.incNumber;
                            $scope.progressPercentage = _config.progressPercentage;
                            $scope.incServiceName = _config.incServiceName;

                            //change
                            $scope.changeNumber = _config.changeNumber;
                            $scope.changeProgressPercentage = _config.changeProgressPercentage;
                            $scope.changeServiceName = _config.changeServiceName;
                            getData1();
                        }

                        //Calling the javascript code that fetches data.
                        function getData1() {

                            var queryParams = {
                                propertySelection: "1,2,3,4,5,6,7,8,179," + $scope.cardName + "," + $scope.status + "," + $scope.time + "," + $scope.availablePercent
                                // queryExpression: 
                            };

                            var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                            foo.get(100, 0, queryParams).then(
                                function (allRecords) {
                                    $scope.textData = allRecords.data;
                                }
                            );

                            var queryParams1 = {
                                propertySelection: "1,2,3,4,5,6,7,8,179," + $scope.incServiceName + "," + $scope.incNumber + "," + $scope.progressPercentage
                                // queryExpression: 
                            };

                            var foo = rxRecordInstanceDataPageResource.withName($scope.incident.incidentRecordDefinition);
                            foo.get(100, 0, queryParams1).then(
                                function (allRecords) {
                                    $scope.textData3 = allRecords.data;
                                }
                            );

                            var queryParams2 = {
                                propertySelection: "1,2,3,4,5,6,7,8,179," + $scope.changeNumber + "," + $scope.changeProgressPercentage + "," + $scope.changeServiceName
                                // queryExpression: 
                            };

                            var foo = rxRecordInstanceDataPageResource.withName($scope.change.changeRecordDefinition);
                            foo.get(100, 0, queryParams2).then(
                                function (allRecords) {
                                    $scope.textData2 = allRecords.data;
                                    console.log($scope.textData3);
                                }
                            );
                        }

                        $scope.setSelectedCardInstanceId = function (recInstanceID) {
                            // trigger the change property event
                            $scope.eventManager.propertyChanged({
                                property: 'CardInstanceId', // name of the property that changed
                                newValue: recInstanceID
                            });
                        }

                        $scope.executeAction = function (guid) {
                            $timeout(function () {
                                var button;
                                var buttonGuid = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', guid);
                                button = $document.find(buttonGuid);
                                if (button) {
                                    button.click();
                                } else {
                                    rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid);
                                }
                            });
                        }

                        // set orange (incident) dot on progress bar only if it is created in current month
                        $scope.getStyle = function (createddate) {
                            var createDate = new Date(createddate);
                            var month = createDate.getMonth();
                            var today = new Date().getMonth();

                            if (today > month) {
                                return {
                                    'display': 'none'
                                };
                            }
                        };
                        init();
                    }
                };
            });
})();
