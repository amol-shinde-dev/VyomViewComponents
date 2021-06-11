(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.service-health-dashboard')
    // .controller('myCtrl', function ($scope, $interval) {
    //   //COMMENT - Begin
    //   $scope.progressData = 0;
    //   var intervalFromParent = 180;
    //   $interval(callAtInterval, 1000, intervalFromParent);

    //   function callAtInterval() {
    //     $scope.progressData += 0.56;
    //     intervalFromParent -= 1;
    //     $scope.tempTime = moment().startOf('day').seconds(intervalFromParent).format('H:mm:ss')

    //     console.log($scope.tempTime);
    //   }
    //   //COMMENT - END

    // })
    .directive('comVyomVyomlibServiceHealthDashboard',
      function (rxRecordInstanceDataPageResource, rxViewComponentEventManager) {
        return {
          restrict: 'E',
          templateUrl: 'scripts/view-components/service-health-dashboard/com-vyom-vyomlib-service-health-dashboard.directive.html',
          scope: {
            rxConfiguration: '='
          },

          link: function ($scope) {
            var _config;
            function init() {
              _config = $scope.rxConfiguration.propertiesByName;

              $scope.cfg = {};
              $scope.textData2 = [];
              $scope.cfg.recordDefinitionName = _config.recordDefinitionName;
              $scope.incident = {};
              $scope.incident.incidentRecordDefinition = _config.incidentRecordDefinition;
              $scope.cardName = _config.cardName;
              $scope.status = _config.status;
              getData1();

            }

            //Calling the javascript code that fetches data.
            function getData1() {

              var queryParams = {
                propertySelection: "1,2,3,4,5,6,7,8,179," + $scope.cardName + "," + $scope.status
                // queryExpression: 
              };

              var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
              foo.get(100, 0, queryParams).then(
                function (allRecords) {
                  $scope.textData = allRecords.data;
                }
              );

              var queryParams1 = {
                propertySelection: "1,2,3,4,5,6,7,179,8,11093002,11093003,11093004,11093005"
                // queryExpression: 
              };

              var foo = rxRecordInstanceDataPageResource.withName($scope.incident.incidentRecordDefinition);
              foo.get(100, 0, queryParams1).then(
                function (allRecords) {
                  $scope.textData3 = allRecords.data;
                }
              );
            }

            $scope.getData2 = function (serviceName) {
              console.log("getdata2 clicked");
              console.log(serviceName);
              var queryParams = {
                propertySelection: "1,2,3,4,5,6,7,179,8,11093002,11093003,11093004,11093005",
                queryExpression: "'11093004' = \"" + serviceName + "\"" //"'Description' = \"first\" "
              };

              var foo = rxRecordInstanceDataPageResource.withName($scope.incident.incidentRecordDefinition);
              foo.get(100, 0, queryParams).then(
                function (allRecords) {
                  $scope.textData2 = allRecords.data;
                }
              );
            }

            $scope.getStyle = function (createddate) {
              console.log(createddate);
              var moonLanding = new Date(createddate);
              var month = moonLanding.getMonth();
              var today = new Date().getMonth();
              console.log(today);
              if (today > month) {
                return { 'display': 'none' };
              }
            };

            init();
          }
        };
      });
})();



