(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.info-card')
        .directive('comVyomVyomlibInfoCard',

            function (rxRecordInstanceAttachmentResource, rxRecordInstanceDataPageResource, rxViewComponentEventManager, rxRecordInstanceResource, $window, $timeout, rxString, $document, rxNotificationMessage) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/info-card/com-vyom-vyomlib-info-card.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _config,
                            eventManager = rxViewComponentEventManager.getInstance($scope);
                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName;


                            $scope.recordDefinition = _config.recordDefinition;
                            $scope.imageId = _config.imageId;
                            $scope.descriptionId = _config.descriptionId;
                            $scope.headerId = _config.headerId;
                            $scope.buttonVisibilityFlag = _config.buttonVisibilityFlag;
                            $scope.filterExpression = _config.filterExpression;

                            $scope.buttonActionGuid = _config.buttonActionGuid;
                            $scope.buttonLabel = _config.buttonLabel;
                            $scope.buttonColor = _config.buttonColor;
                            $scope.headerFontSize = _config.headerFontSize;
                            $scope.perRowCardLength = _config.perRowCardLength ? _config.perRowCardLength : "col-lg-4 col-md-6 col-sm-12";
                            $scope.imageHeight = _config.imageHeight ? _config.imageHeight : 203;
                            $scope.descriptionContainerHeight = _config.descriptionContainerHeight;

                            $scope.myData = [];

                            $scope.getData();
                        };

                        //Calling the javascript code that fetches data.
                        $scope.getData = function () {

                            var queryParams = {
                                queryExpression: $scope.filterExpression,
                                //sortBy: ""
                            };

                            var foo = rxRecordInstanceDataPageResource.withName($scope.recordDefinition);
                            $scope.cardListDataPromise = foo.get(800, 0, queryParams).then(
                                function (allRecords) {
                                    $scope.myData = allRecords.data;
                                }
                            );
                        }



                        // <!----------- buit in functions------------------>
                        $scope.setSelectedCardInstanceId = function (recInstanceID) {
                            // trigger the change property event

                            eventManager.propertyChanged({
                                property: 'CardInstanceId', // name of the property that changed
                                newValue: recInstanceID
                            });


                        }
                        //redirect to differnt url
                        $scope.redirecturl = function (redurl) {
                            // $window.location.href=redurl;
                            $window.open(redurl, '_blank');
                        };

                        function refreshCardList(params) {

                            $scope.getData();
                        }

                        // Overriding the view component refresh method to use our own
                        // to refresh the custom blog.
                        $scope.rxConfiguration.api = {
                            refresh: refreshCardList.bind(null, true)
                        };

                        eventManager.propertyChanged({
                            property: 'api',
                            newValue: $scope.rxConfiguration.api
                        });

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
                        $scope.$watch("rxConfiguration.propertiesByName.filterExpression", function (obj) {
                            $scope.filterExpression = obj;
                        });

                        init();
                    }
                };
            });
})();
