(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.generic-card-widget-v2')
        .directive('comVyomVyomlibGenericCardWidgetV2',

            function (rxRecordInstanceAttachmentResource, rxRecordInstanceDataPageResource, rxViewComponentEventManager, rxRecordInstanceResource, $window, $timeout, rxString, $document, rxNotificationMessage) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/generic-card-widget-v2/com-vyom-vyomlib-generic-card-widget-v2.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _config,
                            eventManager = rxViewComponentEventManager.getInstance($scope);
                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName;


                            $scope.recordDefinition = _config.recordDefinition;
                            $scope.fieldId = _config.fieldId;
                            $scope.leftButtonActionGuid = _config.leftButtonActionGuid;
                            $scope.leftButtonLabel = _config.leftButtonLabel;
                            $scope.leftButtonColor = _config.leftButtonColor;
                            $scope.leftButtonIcon = _config.leftButtonIcon;
                            $scope.leftButtonIconPosition = _config.leftButtonIconPosition;
                            $scope.rightButtonActionGuid = _config.rightButtonActionGuid;
                            $scope.rightButtonLabel = _config.rightButtonLabel;
                            $scope.rightButtonColor = _config.rightButtonColor;
                            $scope.rightButtonIcon = _config.rightButtonIcon;
                            $scope.rightButtonIconPosition = _config.rightButtonIconPosition;
                            $scope.description = _config.description;
                            $scope.Color = _config.Color;
                            $scope.note = _config.note;
                            $scope.header = _config.header;

                            $scope.tooltip = _config.tooltip;
                            $scope.filterExpression = _config.filterExpression;
                            $scope.borderRadius = _config.borderRadius;

                            $scope.tooltipConfig = _config.tooltipConfig;
                            $scope.headerFontSize = _config.headerFontSize;
                            $scope.descriptionFontSize = _config.descriptionFontSize ? _config.descriptionFontSize + "px" : "1em";
                            $scope.cssClasses = _config.cssClasses;
                            $scope.noteFontSize = _config.noteFontSize;
                            $scope.imagePosition = _config.imagePosition;
                            $scope.imageHeight = _config.imageHeight;
                            $scope.imageWidth = _config.imageWidth;
                            $scope.perRowCardLength = _config.perRowCardLength ? _config.perRowCardLength : "col-lg-4 col-md-4 col-sm-4";

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
