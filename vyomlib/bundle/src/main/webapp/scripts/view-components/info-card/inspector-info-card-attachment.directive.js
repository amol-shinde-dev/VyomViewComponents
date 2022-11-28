(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.info-card')
        .directive('comVyomVyomlibInspectorInfoCardAttachment', function (RX_RECORD_DEFINITION, $timeout) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/info-card/com-vyom-vyomlib-inspector-info-card-attachment.directive.html',

                link: function ($scope) {

                    $scope.data = {
                        fields: [],
                        selectedField: null
                    };

                    init();

                    function init() {
                        initializeFields();

                        // Reinitialize field list when user changes Record Definition
                        $scope.$watch('cell.recordDefinition', initializeFields);

                        $scope.$watch('data.selectedField', function (newValue) {
                            if (newValue) {
                                $scope.cell.prop($scope.path, $scope.data.selectedField.id);
                            }
                        }, true);
                    }

                    function initializeFields() {
                        if ($scope.cell.recordDefinition) {
                            $scope.data.fields = getFields();

                            $scope.data.selectedField = _.find($scope.data.fields, {
                                id: Number($scope.cell.prop($scope.path))
                            });
                        } else {
                            $scope.data.fields = [];
                            $scope.data.selectedField = null;
                        }
                    }

                    // Get all attachment fields from the selected Record Definition
                    function getFields() {
                        return _($scope.cell.recordDefinition.fieldDefinitions)
                            .filter({
                                resourceType: RX_RECORD_DEFINITION.dataTypes.attachment.resourceType
                            })
                            .map(function (fieldDefinition) {
                                return {
                                    id: fieldDefinition.id,
                                    name: fieldDefinition.name
                                };
                            })
                            .value();
                    }


                }

            };
        });
})();
