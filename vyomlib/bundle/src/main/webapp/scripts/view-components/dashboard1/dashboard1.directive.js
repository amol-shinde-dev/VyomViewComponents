(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dashboard1')
        .directive('comVyomVyomlibDashboard1',
            function (rxViewComponentEventManager, rxRecordInstanceDataPageResource, $timeout, rxString, $document, rxCurrentUser) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/dashboard1/com-vyom-vyomlib-dashboard1.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope, $window) {
                        var _config;
                        _config = $scope.rxConfiguration.propertiesByName;
                        var eventManager = rxViewComponentEventManager.getInstance($scope);
                        $scope.trainingName = _config.trainingName;
                        console.log("directive:" + $scope.trainingName);

                        // Getting the view component input parameters
                        function init() {
                            _config = $scope.rxConfiguration.propertiesByName;
                            $scope.Colour = _config.Colour;

                            $scope.checked = {};
                            $scope.checked.CheckedTraining = _config.CheckedTraining;

                            $scope.user = {};
                            $scope.user.User = _config.User;

                            $scope.cfg = {};
                            $scope.cfg.recordDefinitionName = _config.recordDefinitionName;

                            $scope.myData = [];
                            $scope.userData = [];
                            $scope.checkedData = [];
                            // $scope.CurrentUserLoginName = rxCurrentUser.get().loginName;
                            $scope.logedInUser = [];

                            //Calling data fetch function (standard BMC OOTB Javascript APIs)
                            getData();
                        }

                        function getData() {
                            var queryParams = {
                                propertySelection: "379,8,11093002"
                            };

                            var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                            foo.get(100, 0, queryParams).then(
                                function (allRecords) {
                                    $scope.myData = allRecords.data;
                                }
                            );

                            queryParams = {
                                propertySelection: "11093002"
                            };

                            var fun = rxRecordInstanceDataPageResource.withName($scope.checked.CheckedTraining);
                            fun.get(10, 0, queryParams).then(
                                function (allRecords) {
                                    $scope.checkedData = allRecords.data;
                                }
                            );

                            var data = "'11093002' == $USER$";
                            var loginDetails = rxRecordInstanceDataPageResource.withName($scope.user.User);

                            var query = {
                                propertySelection: "8,11093002,11093003,11093004,11093005",
                                queryExpression: data
                            };

                            loginDetails.get(100, 0, query).then(
                                function (allRecords) {
                                    $scope.userData = allRecords.data;
                                    $scope.logedInUser = $scope.userData[0];
                                    console.log($scope.logedInUser);
                                }
                            )
                        }
                        //Calling init function, only once.
                        init();

                        $(function () {
                            //Assign Click event to Button.
                            $("#btnGet").click(function () {

                                //Loop through all checked CheckBoxes in GridView.
                                $("#Table1 input[type=checkbox]:checked").each(function () {
                                    var row = $(this).closest("tr")[0];
                                    $scope.trainingName = row.cells[2].innerHTML;
                                    // console.log("html:" + $scope.trainingName);
                                });

                                eventManager.propertyChanged({
                                    property: 'trainingName',
                                    oldValue: null,
                                    newValue: $scope.trainingName
                                });
                                return false;
                            });
                        });
                        function refreshAction(param1) { }
                        $scope.rxConfiguration.api = {
                            refresh: refreshAction.bind(null, true)
                        };
                        var eventManager = rxViewComponentEventManager.getInstance($scope);

                        // Getting the view component input parameters
                        // _config = $scope.rxConfiguration.propertiesByName;
                        // $scope.buttonGuid1 = _config.buttonGuid1;
                        $scope.buttonGuid1 = "59131ded-f3e7-4ab4-b8e1-3c0c660ebd6b";
                        $scope.clickButton = function () {

                            $timeout(function () {
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

                    }
                };
            });
})();