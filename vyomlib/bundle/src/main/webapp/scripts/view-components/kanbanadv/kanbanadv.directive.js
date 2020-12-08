(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.kanbanadv').directive('comVyomVyomlibKanbanadv',
        function (rxViewComponentEventManager, $document, $timeout, rxNotificationMessage, rxString, $window, rxRecordInstanceDataPageResource) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/kanbanadv/com-vyom-vyomlib-kanbanadv.directive.html',
                

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config, ID, summary, priority, Status;

                    function init() {
                        _config = $scope.rxConfiguration.propertiesByName;
                        $scope.cfg = {};

                        $scope.cfg.recordDefinitionName = _config.recordDefinitionName;
                        $scope.cfg.ID = _config.ID;
                        $scope.cfg.summary = _config.summary;
                        $scope.cfg.priority = _config.priority;
                        $scope.cfg.Status = _config.Status;
                        

                        $scope.myData = [];
                        window.data = [];

                        console.log("init" + $scope.cfg.ID);

                        //Calling data fetch function (standard BMC OOTB Javascript APIs)
                        getData();
                        // window.default1();

                        window.ID = $scope.cfg.ID;
                        window.summary = $scope.cfg.summary;
                        window.priority = $scope.cfg.priority;
                        window.Status = $scope.cfg.Status;

                    }

                    function getData() {
                        var queryParams = {
                            propertySelection: ID
                        };

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                // $scope.myData = allRecords.data;
                                window.data = allRecords.data;

                                // console.log("getdata" + $scope.myData);
                                // console.log(window.data);
                                window.def();
                                window.defprogress();
                            }

                        );

                    }

                    $scope.logId = function () {
                        console.log($scope.id);
                    }


                    //Calling init function, only once.
                    init();

                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    // Getting the view component input parameters
                    _config = $scope.rxConfiguration.propertiesByName;

                    $scope.Colour = _config.Colour;
                    $scope.dropcardworking_GUID = _config.dropcardworking_GUID;
                    $scope.ViewGuid = _config.ViewGuid;
                    $scope.CreateTicket = _config.CreateTicket;



                    $window.dropcardworking = function () {
                        console.log("dropcardworking");
                        $timeout(function () {
                            var button;

                            var dropcardworking_GUID = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', $scope.dropcardworking_GUID);

                            button = $document.find(dropcardworking_GUID);

                            if (button) {
                                button.click();
                            } else {
                                rxNotificationMessage.error('Cannot find button ' + $scope.dropcardworking_GUID);
                            }
                        });
                    };

                    // $window.viewbuttonscope = function() {
                    //     console.log("viewbuttonscope called");
                    // }



                    $window.ViewButton = function () {

                        console.log("Viewbuttoncalled");

                        $timeout(function () {
                            var button;

                            var ViewGuid = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', $scope.ViewGuid);

                            button = $document.find(ViewGuid);


                            if (button) {
                                button.click();
                            } else {
                                rxNotificationMessage.error('Cannot find button ' + $scope.ViewGuid);
                            }
                        });
                    };

                    $window.CreateTicket = function () {
                        console.log("createticket called");
                        $timeout(function () {
                            var button;

                            var CreateTicket = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', $scope.CreateTicket);

                            button = $document.find(CreateTicket);


                            if (button) {
                                button.click();
                            } else {
                                rxNotificationMessage.error('Cannot find button ' + $scope.CreateTicket);
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