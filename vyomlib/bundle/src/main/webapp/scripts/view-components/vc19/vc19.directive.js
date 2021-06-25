(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc19')
        .directive('comVyomVyomlibVc19',

            function (RX_RECORD_DEFINITION, rxRecordDefinitionResource, rxRecordInstanceDataPageResource, rxRecordInstanceResource, $window, rxViewComponentEventManager, rxCurrentUser, $timeout, rxString, $document, rxNotificationMessage, rxGUID) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/vc19/com-vyom-vyomlib-vc19.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope, $element) {
                        var _config;



                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName;

                            // create event manager
                            $scope.eventManager = rxViewComponentEventManager.getInstance($scope);


                            $scope.enabledDownloadButton = _config.enabledDownloadButton;
                            $scope.enabledDownloadButton ? $element.find("#approvalDownload").show() : $element.find("#approvalDownload").hide();

                            $scope.RecordDefinition = _config.recordDefinitionFullName;
                            $scope.ApprovalFieldID = _config.ApprovalFieldID;
                            $scope.CreatedDateFieldID = _config.CreatedDateFieldID;
                            $scope.DueDateFieldID = _config.DueDateFieldID;
                            $scope.AdditionalField = _config.AdditionalField;
                            $scope.displayIdFieldID = _config.displayIdFieldID;
                            $scope.editActionGUID = _config.editActionGUID;
                            $scope.approveActionGUID = _config.approveActionGUID;
                            $scope.commentField = _config.commentField;
                            $scope.modalID = $scope.rxConfiguration.guid;

                            //Hide Column
                            $scope.HiddenTargetAchievment = _config.HiddenTargetAchievment;
                            $scope.target = $scope.HiddenTargetAchievment;

                            $scope.ApprovalField = _config.ApprovalField;
                            $scope.status = $scope.ApprovalField;


                            $scope.DueDateField = _config.DueDateField;
                            $scope.duedate = $scope.DueDateField;

                            $scope.displayIdField = _config.displayIdField;
                            $scope.displayid = $scope.displayIdField;

                            $scope.NewColor = _config.NewColor;
                            $scope.InProgressColor = _config.InProgressColor;
                            $scope.ClosedColor = _config.ClosedColor;

                            $scope.ViewReqGuid = _config.ViewReqGuid;
                            $scope.ViewReqColor = _config.ViewReqColor;
                            $scope.ViewReqLabel = _config.ViewReqLabel;
                            $scope.modalComment = "";



                            $scope.FilterExp = _config.FilterExp;

                            $scope.list = (_config.list == null || _config.list == '' || _config.list == undefined) ? [] : angular.fromJson(_config.list);
                            $scope.listFieldIds = "";
                            if ($scope.list.length >= 1) {
                                for (var i in $scope.list) {

                                    $scope.listFieldIds += $scope.list[i].id + ",";
                                }
                            }



                            $scope.selectedcheckbox = [];


                            $scope.mydata = [];
                            $scope.col = [{}];


                            $scope.getRecordDefinition();

                            $scope.fields = [];
                            $scope.selectionFields = [];







                            // get selection Field Label
                            if ($scope.RecordDefinition) {
                                rxRecordDefinitionResource.get($scope.RecordDefinition).then(function (recordDefinition) {
                                    $scope.TempRecordDefinition = recordDefinition;
                                    $scope.fields = ($scope.TempRecordDefinition.fieldDefinitions).map(function (fieldDefinition) {
                                        return {
                                            id: fieldDefinition.id,
                                            name: fieldDefinition.name,
                                            resourceType: fieldDefinition.resourceType
                                        };
                                    });

                                    for (var i in $scope.fields) {
                                        if (($scope.fields[i].resourceType == RX_RECORD_DEFINITION.dataTypes.selection.resourceType)) {
                                            $scope.selectionFields.push({
                                                id: $scope.fields[i].id,
                                                name: $scope.fields[i].name,
                                                resourceType: $scope.fields[i].resourceType,
                                                optionNamesById: _.find($scope.TempRecordDefinition.fieldDefinitions, function (obj) {
                                                    return obj.id == $scope.fields[i].id
                                                }).optionNamesById
                                            });
                                        }
                                    }

                                }).catch(function (e) {
                                    console.log("Unable to retrieve " + $scope.RecordDefinition + " RecordDefinition." + e);
                                });
                            }

                            $scope.customFields = $scope.fields;

                        };




                        // <!----------- buit in functions------------------>


                        $scope.getValues = function (FieldID, FieldValue) {
                            if (!FieldID || ($scope.fields == null || $scope.fields.length == 0)) return null;

                            if (FieldID)
                                if (_.find($scope.fields, function (obj) {
                                        return obj.id == FieldID
                                    }).resourceType == RX_RECORD_DEFINITION.dataTypes.selection.resourceType) {
                                    return (_.find($scope.selectionFields, function (obj) {
                                        return obj.id == FieldID
                                    })).optionNamesById[FieldValue];

                                }
                            else return FieldValue;
                            else return FieldValue ? FieldValue : null;
                        }

                        $scope.getRecordDefinition = function () {


                            var foo = rxRecordInstanceDataPageResource.withName($scope.RecordDefinition);
                            var queryParams = {
                                propertySelection: "179," + $scope.displayIdFieldID + "," + $scope.listFieldIds + "," + $scope.CreatedDateFieldID + "," + $scope.DueDateFieldID + "," + $scope.ApprovalFieldID,
                                queryExpression: $scope.FilterExp ? $scope.FilterExp : ""

                            };

                            foo.get(-1, 0, queryParams).then(
                                function (allRecords) {
                                    $scope.mydata = allRecords.data; //.slice()

                                }
                            );
                        }

                        $scope.getTargetAchievment = function (createdDate, DueDate) {
                            var submittedDate = moment(createdDate).format('YYYY-MM-DD hh:mm:ss');
                            var endDate = moment(DueDate).format('YYYY-MM-DD hh:mm:ss');
                            var currentDate = moment().format('YYYY-MM-DD hh:mm:ss');

                            var totalDays = moment(endDate).diff(moment(submittedDate), 'days');
                            var remainDays = moment(endDate).diff(moment(currentDate), 'days');
                            var completedDays = moment(currentDate).diff(moment(submittedDate), 'days');

                            var target = Math.round(completedDays * 100 / totalDays);

                            if (totalDays < 0 || target < 0) {
                                return 0;
                            } else
                            if (target > 100) {
                                return 100;
                            } else {


                                return target;
                            }



                        }

                        $scope.executeAction = function (actionGUID) {

                            $timeout(function () {
                                var button;



                                var buttonGuid = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', actionGUID);

                                button = $document.find(buttonGuid);


                                if (button) {
                                    button.click();
                                } else {
                                    rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid);
                                }
                            });
                        }



                        $scope.editAction = function (recInstanceID, buttonguid) {
                            // trigger the change property event
                            $scope.eventManager.propertyChanged({
                                property: 'SelectedInstanceID', // name of the property that changed
                                newValue: recInstanceID
                            });

                            $scope.executeAction(buttonguid);
                        }


                        $scope.getApproval = function (guid, value) {
                            $scope.selectedcheckbox = [];

                            var objectRecord = rxRecordInstanceResource.withName($scope.RecordDefinition);
                            objectRecord.get(guid).then(
                                function (record) {
                                    record.setValue($scope.ApprovalFieldID, value);
                                    record.put();

                                }

                            ).then(function () {
                                $scope.getRecordDefinition();
                                $scope.getRecordDefinition();



                            });

                            rxNotificationMessage.success("Request " + value + " Successfully.");



                        }


                        $scope.openModalOnCondition = function (modalButton) {

                            var selectedcheckboxvalues = _.values($scope.selectedcheckbox);

                            if (_.contains(selectedcheckboxvalues, true)) {

                                $('#' + $scope.modalID).modal('toggle');

                                // $element.find('#approvalCentralModal').show();
                                if (modalButton == "rejectSelected") {
                                    $element.find("#modalApproval").hide();
                                    $element.find("#modalReject").show();
                                } else {
                                    $element.find("#modalApproval").show();
                                    $element.find("#modalReject").hide();
                                }
                            } else {

                                rxNotificationMessage.error("Atleast one row should be selected");
                            }
                        }



                        $scope.approveAll = function (value) {

                            var selectedcheckboxvalues = _.values($scope.selectedcheckbox);

                            if (_.contains(selectedcheckboxvalues, true)) {

                                for (var temp in $scope.selectedcheckbox) {

                                    if ($scope.selectedcheckbox[temp] == true) {

                                        var objectRecord = rxRecordInstanceResource.withName($scope.RecordDefinition);
                                        objectRecord.get(temp).then(
                                            function (record) {
                                                record.setValue($scope.ApprovalFieldID, value);

                                                record.put();

                                            }

                                        ).then(function () {

                                            $scope.selectedcheckbox = [];
                                            $scope.getRecordDefinition();
                                            $scope.getRecordDefinition();

                                            rxNotificationMessage.success("Request " + value + " Successfully.");
                                        })
                                    }


                                }
                            } else {

                                rxNotificationMessage.error("Atleast one row should be selected");
                            }





                        }

                        $scope.bulkedit = function (value) {

                            if ($scope.modalComment) {
                                var modalComment = $scope.modalComment;
                                for (var temp in $scope.selectedcheckbox) {

                                    if ($scope.selectedcheckbox[temp] == true) {

                                        var objectRecord = rxRecordInstanceResource.withName($scope.RecordDefinition);
                                        objectRecord.get(temp).then(
                                            function (record) {
                                                record.setValue($scope.ApprovalFieldID, value);
                                                record.setValue($scope.commentField, modalComment);
                                                record.put();

                                            }

                                        ).then(function () {

                                            $scope.selectedcheckbox = [];
                                            $scope.getRecordDefinition();
                                            $scope.getRecordDefinition();

                                            rxNotificationMessage.success("Request " + value + " Successfully.");
                                        })
                                    }


                                }

                                $('#' + $scope.modalID).modal('toggle');
                                $scope.modalComment = "";
                            } else {
                                rxNotificationMessage.error("Please fill out this field.");
                            }


                        }

                        $scope.updatedStatusColor = function (statusVar) {


                            if (statusVar == "new") {

                                return "w3-" + $scope.NewColor;

                            } else
                            if (statusVar == "inprogress") {
                                return "w3-" + $scope.InProgressColor;

                            } else
                            if (statusVar == "closed") {
                                return "w3-" + $scope.ClosedColor;

                            }




                        }



                        $scope.downloadExcel = function (JSONData, ReportTitle, ShowLabel) {

                            /*  var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;*/
                            var arrData = JSONData;

                            var CSV = '';
                            // CSV += ReportTitle + '\r\n\n';
                            if (ShowLabel) {
                                var row = "";

                                for (var index in arrData[0]) {

                                    if (index != "$$hashKey") {



                                        $scope.labelObject = _.find($scope.fields, function (obj) {

                                            return obj.id == index
                                        });

                                        row += $scope.labelObject.name + ',';
                                    }
                                }

                                row = row.slice(0, -1);


                                CSV += row + '\r\n';
                            }


                            for (var i = 0; i < arrData.length; i++) {
                                var row = "";

                                for (var index in arrData[i]) {

                                    if (index != "$$hashKey") {

                                        row += '"' + arrData[i][index] + '",';
                                    }
                                }

                                row.slice(0, row.length - 1);
                                CSV += row + '\r\n';
                            }

                            if (CSV == '') {
                                alert("Invalid data");
                                return;
                            }


                            var fileName = "MyReport_";

                            fileName += ReportTitle.replace(/ /g, "_");


                            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

                            var blob = new Blob([CSV], {
                                type: "text/csv;charset=utf-8;"
                            });

                            if (navigator.msSaveBlob) { // IE 10+
                                navigator.msSaveBlob(blob, fileName + ".csv")
                            } else {
                                var link = document.createElement("a");
                                link.href = uri;

                                link.style.cssText = "'visibility:hidden'";
                                link.download = fileName + ".csv";


                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }

                        }

                        $scope.hideColumn = function (obj) {


                            if (obj.check == true) {
                                return false;
                            } else {
                                return true;
                            }

                        }



                        init();

                    }

                };
            });
})();
