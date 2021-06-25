// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc13').directive('comVyomVyomlibInspectorVc13Bicon', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc13/com-vyom-vyomlib-inspector-vc13-bicon.directive.html',

            link: function ($scope) {
                
                   $scope.data = {
                    fields: [],
                    selectedField: null
                       
                       
                };
              
                  
                
            $scope.names = ["star","cloud","activity_feed_clock_o", "adjust_settings", "approved_task_form", "battery", "calculator", "calendar", "case_bag","check_circle","cross_circle_o","cross","trash", "gear","save_all_o","check","check_circle","user_check","database_plus","plus", "plus_circle_o","ser_plus","laptop_server","lightbulb_o", "mapmarker_o","paperclip","printer","restart","redo","reply","search", "share","star_o","thumbs_down","thumbs_up"];

                function initColor() {
                    $scope.selectedName = $scope.cell.prop($scope.path);
                    
                }

                // Saving the parameter
                $scope.saveColor = function () {
                    $scope.cell.prop($scope.path, $scope.selectedName);
                };
                
                $scope.$watch('selectedName', $scope.saveColor)

                initColor();
            }
          
        };
    });
})();