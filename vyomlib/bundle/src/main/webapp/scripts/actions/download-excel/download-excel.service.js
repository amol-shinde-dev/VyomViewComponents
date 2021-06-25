(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.actions.download-excel').service('comVyomVyomlibDownloadExcel', function ($q, rxRecordDefinitionResource, RX_RECORD_DEFINITION) {
        return {
            // code executed at runtime.
            execute: function (Label, recordDefinitionName, Records) {


                var stringRecords = JSON.stringify(Records);
                var arrData = JSON.parse(stringRecords.trim().split('\\n').join(""));

                var CSV = '';
                var ShowLabel = true;
                var ReportTitle = Label;
                var middleColumn = _.size(arrData[0]) / 2;


                if (ShowLabel) {
                    var row = "";


                    for (var index in arrData[0]) {

                        if (index != "$$hashKey" && Object.keys(arrData[0]).indexOf(index) > middleColumn) {

                            row += index + ',';
                        }
                    }

                    row = row.slice(0, -1);


                    CSV += row + '\r\n';
                }
                rxRecordDefinitionResource.get(recordDefinitionName).then(function (recordDefinition) {
                    console.log(arrData);
                    console.log(recordDefinition.fieldDefinitions);
                    for (var i = 0; i < arrData.length; i++) {
                        var row = "";

                        for (var index in arrData[i]) {


                            if (index != "$$hashKey" && Object.keys(arrData[i]).indexOf(index) > middleColumn) {




                                var strKey = "";
                                if (_.find(recordDefinition.fieldDefinitions, {
                                        name: index
                                    }).resourceType == RX_RECORD_DEFINITION.dataTypes.selection.resourceType) {

                                    strKey = _.find(recordDefinition.fieldDefinitions, {
                                        name: index
                                    }).optionNamesById[arrData[i][index]]

                                } else {
                                    strKey = arrData[i][index];
                                }
                                strKey = strKey == null ? "" : strKey.toString();


                                row += '"' + strKey.split(',').join("#") + '",';


                            }
                        }

                        row.slice(0, row.length - 1);
                        CSV += row + '\r\n';
                    }

                    if (CSV == '') {
                        alert("Invalid data");
                        return $q.reject();
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

                });


                return {
                    ActionResult: 'ok'
                };

            },

            getOutputParams: function () {

                return $q.when([
                    {
                        name: 'ActionResult'
                    }
                    ]);

            }
        }
    })
})();
