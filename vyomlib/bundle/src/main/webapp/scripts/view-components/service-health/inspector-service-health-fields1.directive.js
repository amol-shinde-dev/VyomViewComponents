// This directive is used at design time to choose a field.
(function() {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.service-health')
        .directive('comVyomVyomlibInspectorServiceHealthFields1',
            function(RX_RECORD_DEFINITION, $timeout) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/service-health/com-vyom-vyomlib-inspector-service-health-fields1.directive.html',

                    link: function($scope) {

                        $scope.data = {

                            fields1: [],

                            selectedField1: null
                        };

                        init();

                        function init() {
                            initializeFields();

                            // reinitialize fields when user change Record Definition

                            $scope.$watch('cell.recordDefinition1', initializeFields);

                            $scope.$watch('data.selectedField1', function(newValue) {
                                if (newValue) {
                                    // set field id to the model
                                    $scope.cell.prop($scope.path, $scope.data.selectedField1.id);
                                }
                            }, true);
                        }

                        function initializeFields() {

                            if ($scope.cell.recordDefinition1) {
                                $scope.data.fields1 = getFields1();

                                $scope.data.selectedField1 = _.find($scope.data.fields1, {
                                    id: Number($scope.cell.prop($scope.path))
                                });
                            } else {
                                $scope.data.fields1 = [];
                                $scope.data.selectedField1 = null;
                            }
                        }

                        // get all attachment fields from the selected Record Definition

                        function getFields1() {
                            return _($scope.cell.recordDefinition1.fieldDefinitions)
                                .map(function(fieldDefinition) {
                                    return {
                                        id: fieldDefinition.id,
                                        name: fieldDefinition.name,
                                    };
                                })
                                .value();
                        }
                    }
                };
            });
})();