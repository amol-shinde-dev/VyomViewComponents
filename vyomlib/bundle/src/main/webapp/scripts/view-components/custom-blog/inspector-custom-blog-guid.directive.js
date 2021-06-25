// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.custom-blog').directive('comVyomVyomlibInspectorCustomBlogGuid', function (RX_RECORD_DEFINITION, $timeout, rxRecordInstanceDataPageResource) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/custom-blog/com-vyom-vyomlib-inspector-custom-blog-guid.directive.html',

            link: function ($scope) {

                $scope.data = {
                    fields: [],
                    selectedField: null
                };




                function init() {


                    intializeGUID();

                    // reinitialize fields when user change Record Definition
                    $scope.$watch('cell.recordDefinitionFullName', intializeGUID);

                    $scope.$watch('data.selectedField', function (newValue) {
                        if (newValue) {
                            // set field id to the model
                            $scope.cell.prop($scope.path, $scope.data.selectedField[179]);




                        }
                    }, true);

                }


                function intializeGUID() {
                    if ($scope.cell.prop('rxData/recordDefinitionFullName')) {
                        var foo = rxRecordInstanceDataPageResource.withName($scope.cell.prop('rxData/recordDefinitionFullName'));
                        var queryParams = {
                            propertySelection: "179,8,1,"

                        };

                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.data.fields = allRecords.data; //.slice()

                                $scope.data.selectedField = _.find($scope.data.fields, {
                                    179: $scope.cell.prop($scope.path)
                                });

                            }
                        );
                    }

                }



                init();



            }

        };
    });
})();
