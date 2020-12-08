(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dashboard1').directive('comVyomVyomlibDashboard1',
        function (rxViewComponentEventManager, rxRecordInstanceDataPageResource, rxRecordInstanceAttachmentResource, $timeout, rxString, $document, rxCurrentUser) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/dashboard1/com-vyom-vyomlib-dashboard1.directive.html',

                // rxConfiguration is used to get input parameters:
                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;
                    _config = $scope.rxConfiguration.propertiesByName;
                    var eventManager = rxViewComponentEventManager.getInstance($scope);
                    $scope.trainingName = '';
                    $scope.skillId = '';
                    $scope.removeName = _config.removeName;
                    $scope.secondCardTitle = _config.secondCardTitle;
                    $scope.attachmentFieldId = _config.attachmentFieldId;
                    $scope.fileName = '';
                    $scope.User = _config.User;

                    // Getting the view component input parameters
                    function init() {
                        // Getting the view component input parameters

                        _config = $scope.rxConfiguration.propertiesByName;
                        $scope.color1 = _config.color1;
                        $scope.color2 = _config.color2;
                        $scope.color3 = _config.color3;
                        $scope.color4 = _config.color4;
                        $scope.color5 = _config.color5;
                        $scope.color6 = _config.color6;

                        $scope.text1 = _config.text1;
                        $scope.text2 = _config.text2;
                        $scope.text3 = _config.text3;
                        $scope.text4 = _config.text4;
                        $scope.text5 = _config.text5;
                        $scope.text6 = _config.text6;

                        $scope.icon1 = _config.icon1;
                        $scope.icon2 = _config.icon2;
                        $scope.icon3 = _config.icon3;
                        $scope.icon4 = _config.icon4;
                        $scope.icon5 = _config.icon5;
                        $scope.icon6 = _config.icon6;

                        $scope.url1 = _config.url1;
                        $scope.url2 = _config.url2;
                        $scope.url3 = _config.url3;
                        $scope.url4 = _config.url4;
                        $scope.url5 = _config.url5;
                        $scope.url6 = _config.url6;

                        $scope.description1 = _config.description1;
                        $scope.description2 = _config.description2;
                        $scope.description3 = _config.description3;
                        $scope.description4 = _config.description4;
                        $scope.description5 = _config.description5;
                        $scope.description6 = _config.description6;

                        $scope.buttonGuid1 = _config.buttonGuid1;
                        $scope.buttonGuid2 = _config.buttonGuid2;

                        console.log("selected color is:" + $scope.color);

                        $scope.checked = {};
                        $scope.checked.CheckedTraining = _config.CheckedTraining;

                        $scope.cfg = {};
                        $scope.cfg.recordDefinitionName = _config.recordDefinitionName;

                        $scope.skills = [];
                        $scope.myData = [];
                        $scope.checkedData = [];
                        $scope.logedInUser = [];
                        $scope.userData = [];
                        // $scope.CurrentUserLoginName = rxCurrentUser.get().loginName;

                        //Calling data fetch function (standard BMC OOTB Javascript APIs)
                        $scope.get();
                        getData();
                    }

                    $scope.get = function () {
                        //record of selected technology name
                        var queryParams = {
                            propertySelection: "1,11093002"
                            // propertySelection: "1,10740003" //checked Training
                        };

                        var fun = rxRecordInstanceDataPageResource.withName($scope.checked.CheckedTraining);
                        fun.get(10, 0, queryParams).then(
                            function (allRecords) {
                                $scope.checkedData = allRecords.data;
                            }
                        );
                    }

                    function getData() {
                        //record of technology
                        var queryParams = {
                            propertySelection: "379,8,11093002," + + $scope.attachmentFieldId,
                            // propertySelection: "379,8,10740010," + + $scope.attachmentFieldId, //My Training Record
                        };

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(10, 0, queryParams).then(
                            function (allRecords) {
                                $scope.myData = allRecords.data;
                                for (var i = 0; i < $scope.myData.length; i++) {
                                    $scope.ID = $scope.myData[i][379]
                                    $scope.fetchPicture($scope.ID);
                                }
                            }
                        );

                        // record of loged in user
                        var data = "'11093002' == $USER$";
                        // var data = "'10740003' == $USER$";
                        var loginDetails = rxRecordInstanceDataPageResource.withName($scope.User);

                        var query = {
                            propertySelection: "8,379,11093002,11093003,11093004,11093005",
                            // propertySelection: "8,379,10740003,10740004,10740005,10740006", //User Record
                            queryExpression: data
                        };

                        loginDetails.get(10, 0, query).then(
                            function (allRecords) {
                                $scope.userData = allRecords.data;
                                $scope.logedInUser = $scope.userData[0];
                            }
                        )
                    }

                    init();

                    $scope.fetchPicture = function (Id) {
                        var _configuration = $scope.rxConfiguration.propertiesByName;
                        $scope.pictureData = [];
                        if (_configuration.recordDefinitionName && $scope.attachmentFieldId) {
                            var attachmentsResource = rxRecordInstanceAttachmentResource.withName(_configuration.recordDefinitionName);
                            attachmentsResource.get(Id, $scope.attachmentFieldId.toString())
                                .then(function (attachmentContent) {
                                    // Creating an image object, reference:
                                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
                                    if (attachmentContent) {
                                        if (attachmentContent.headers('content-type') && attachmentContent.headers('content-type').split('/')[0].toLowerCase() === 'image') {
                                            var arrayBufferView = new Uint8Array(attachmentContent.data),
                                                urlCreator = window.URL || window.webkitURL;

                                            var file = new Blob([arrayBufferView], {
                                                type: attachmentContent.headers('content-type')
                                            });

                                            var image = urlCreator.createObjectURL(file);
                                            $scope.pictureData.push(image);
                                        }
                                    }
                                });
                        }
                    };

                    //add technology from record
                    $(function (e) {
                        //Assign Click event to Button.
                        $("#btnGet").click(function () {

                            //Loop through all checked CheckBoxes in GridView.
                            $("#Table1 input[type=checkbox]:checked").each(function () {
                                var row = $(this).closest("tr")[0];
                                $scope.trainingName += row.cells[1].innerHTML + ";";
                            });

                            //output parameter
                            eventManager.propertyChanged({
                                property: 'trainingName',
                                oldValue: null,
                                newValue: $scope.trainingName
                            });
                            // location.reload(true);
                            // $("#Table2").load(window.location.href + " #Table2");
                            return false;
                        });
                    });

                    //remove technology from table
                    $(function (e) {
                        //Assign Click event to Button.
                        $("#btnRmv").click(function () {

                            //Loop through all checked CheckBoxes in GridView.
                            $("#Table2 input[type=checkbox]:checked").each(function () {
                                var row = $(this).closest("tr")[0];
                                $scope.skillId += row.cells[1].innerHTML + ";";
                            });

                            //output parameter
                            eventManager.propertyChanged({
                                property: 'skillId',
                                oldValue: null,
                                newValue: $scope.skillId
                            });
                            return false;
                        });
                    });

                    $scope.clickButton = function () {
                        $timeout(function () {
                            var button1, button2;

                            var buttonGuid1 = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', $scope.buttonGuid1);
                            var buttonGuid2 = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', $scope.buttonGuid2);

                            button1 = $document.find(buttonGuid1);
                            button2 = $document.find(buttonGuid2);

                            if (button1) {
                                button1.click();
                            } else if (button2) {
                                button2.click();
                            }
                            else {
                                rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid1);
                            }
                        });
                    };

                    $scope.clickButton1 = function () {
                        $timeout(function () {
                            var button2;

                            var buttonGuid2 = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', $scope.buttonGuid2);

                            button2 = $document.find(buttonGuid2);

                            if (button2) {
                                button2.click();
                            }
                            else {
                                rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid1);
                            }
                        });
                    };
                }
            };
        });
})();