// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.generic-card-widget-v2')
        .directive('comVyomVyomlibInspectorGenericCardWidgetV2Bgcolor', function (RX_RECORD_DEFINITION, $timeout) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/generic-card-widget-v2/com-vyom-vyomlib-inspector-generic-card-widget-v2-bgcolor.directive.html',

                link: function ($scope) {

                    $scope.data = {
                        fields: [],
                        selectedField: null
                    };

                    $scope.names = ["erric_default", "Gray1", "Gray2", "white", "white-no-border", "link", "blue", "red", "green", "orange", "lime", "gray", "black", "pink", "brown", "dark-grey", "purple", "deep-purple", "indigo", "light-blue", "cyan", "teal", "light-green", "khaki", "yellow", "amber", "deep-orange", "blue-grey", "light-grey"];

                    // $scope.names = [{ key: "erric_default", value: "erric_default" }, { key: "white", value: "white" }, { key: "black", value: "black" },
                    // { key: "blue", value: "blue" }, { key: "red", value: "red" }, { key: "orange", value: "orange" }, { key: "lime", value: "lime" },
                    // { key: "pink", value: "pink" }, { key: "brown", value: "brown" }, { key: "dark-grey", value: "dark-grey" }, { key: "gray", value: "gray" },
                    // { key: "purple", value: "purple" }, { key: "deep-purple", value: "deep-purple" }, { key: "indigo", value: "indigo" }, { key: "light-blue", value: "light-blue" },
                    // { key: "khaki", value: "khaki" }, { key: "green", value: "green" }, { key: "teal", value: "teal" }, { key: "cyan", value: "cyan" },
                    // { key: "blue-grey", value: "blue-grey" }, { key: "light-grey", value: "light-grey" }, { key: "Gray 1", value: "#242424" }, { key: "Gray 2", value: "#767676" },
                    // { key: "yellow", value: "yellow" }, { key: "light-green", value: "light-green" }, { key: "deep-orange", value: "deep-orange" }, { key: "amber", value: "amber" },];

                    // $scope.HChange = { key: "", value: "" }

                    function initMaxStarValue() {
                        // $scope.HChange = angular.fromJson($scope.cell.prop($scope.path));
                        $scope.HChange = $scope.cell.prop($scope.path);
                        // $scope.HChange = $scope.HChange.value;
                        // console.log("bgcolor :" + $scope.HChange);
                    }

                    // Saving the parameter
                    function saveMaxStarValue() {
                        // console.log("save Hchange value: ", $scope.HChange);
                        // console.log($scope.HChange.value);
                        $scope.cell.prop($scope.path, $scope.HChange);
                        // $scope.cell.prop($scope.path, angular.toJson($scope.HChange));

                        // console.log("save path value: ", $scope.path);
                    }

                    // We watch "$scope.minSliderValue" to save it.
                    $scope.$watch('HChange', saveMaxStarValue)
                    initMaxStarValue();
                }
            };
        });
})();
