(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc5')
        .directive('comVyomVyomlibVc5',

            function (rxRecordInstanceDataPageResource, rxRecordInstanceResource, $window, rxViewComponentEventManager, rxCurrentUser) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/vc5/com-vyom-vyomlib-vc5.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _config;

                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName;
                            $scope.recordDefinitionName = _config.recordDefinitionName;


                            $scope.JobTitleField = _config.JobTitleField;
                            $scope.LocationField = _config.LocationField;


                            $scope.vmRecDef = _config.vmRecDef;
                            $scope.vmNameId = _config.vmNameId;
                            $scope.vmDescId = _config.vmDescId;




                            $scope.vmData = [];

                            $scope.CurrentUserFullName = rxCurrentUser.get().fullName;
                            $scope.CurrentUserLoginName = rxCurrentUser.get().loginName;
                            getvmData();


                        };








                        //  <!---------------- custom functions --------------------------->
                        function getvmData() {


                            var foo = rxRecordInstanceDataPageResource.withName($scope.vmRecDef);

                            foo.get(100, 0, {
                                propertySelection: "2,179," + $scope.vmNameId + "," + $scope.vmDescId,
                            }).then(
                                function (allRecords) {
                                    $scope.vmData = allRecords.data;

                                }
                            );



                        }





                        init();

                    }

                };
            });
})();
