(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.d3-gauge')
    .directive('comVyomVyomlibD3Gauge',
      function ($timeout,
        $window,
        rxDesignerCache,
        rxGUID,
        rxRecordInstanceDataPageResource,
        rxViewComponentEventManager) {
        return {
          restrict: 'E',
          templateUrl: 'scripts/view-components/d3-gauge/com-vyom-vyomlib-d3-gauge.html',
          scope: {
            rxConfiguration: '='
          },

          link: function ($scope) {
            // http://nvd3.org/examples/pie.html
            var nvD3Chart,
              _config,
              recordDefinitionName,
              recordDefinition,
              fieldList,
              selectionValues = {},
              fieldIdNameMapping = {},
              requestData = [],

              eventManager = rxViewComponentEventManager.getInstance($scope);

            $scope.gaugeChartConfiguration = {};

            function refreshPieChart(params) {
              console.log('Refreshing Pie Chart');
              initialize();
            }

            // Overriding the view component refresh method to use our own
            // to refresh the pie chart.
            $scope.rxConfiguration.api = {
              refresh: refreshPieChart.bind(null, true)
            };

            eventManager.propertyChanged({
              property: 'api',
              newValue: $scope.rxConfiguration.api
            });

            // The chart name must be unique, we use a generated GUID.
            $scope.gaugeChartConfiguration.className = rxGUID.generate('chart');

            // Get parameters from the configuration, set also default values.
            function initialize() {
              _config = $scope.rxConfiguration.propertiesByName;

              recordDefinitionName = _config.recordDefinitionName;
              $scope.recordInstanceId = _config.recordInstanceId;
              $scope.fieldId = _config.fieldId;
              $scope.id = _config.id;
              // $scope.pieChartConfiguration.title = _config.title;

              $scope.name = _config.name;
              $scope.min = _config.min;
              $scope.max = _config.max;
              // LMA:: TODO:: Name is not good...
              // fetchDataAndDrawChart(isAssociationUsed);
              fetchRecordDefinitionData();
            }

            // Getting the record instances.
            function fetchRecordDefinitionData() {
              var queryParams = {
                propertySelection: "179," + $scope.fieldId,
                queryExpression: "'179' = \"" + $scope.recordInstanceId + "\""
              };

              var foo = rxRecordInstanceDataPageResource.withName(recordDefinitionName);
              foo.get(100, 0, queryParams).then(
                function (recordData) {
                  requestData = recordData.data;
                  drawGaugeChart();
                }
              );
            }

            function drawGaugeChart() {
              // Is the DOM ready? Sometimes the div name is still the AngularJs reference {{cfg.className}}
              // In this case we call the drawing function later.
              if (angular.element('.' + $scope.gaugeChartConfiguration.className).length + ' svg') {
                // Trying to determine the viewbox proportions using the parent initial proportions.

                nvD3Chart = nv.addGraph(function () {
                  var chart = nv.models.gaugeChart()
                    .title($scope.name)
                    .min($scope.min)
                    .max($scope.max);

                  d3.select('.' + $scope.gaugeChartConfiguration.className)
                    .datum([requestData[0][$scope.fieldId]])
                    .call(chart);

                  nv.utils.windowResize(chart.update);
                  return chart;
                });

                // This is done due to a known issue in nvd3, we force a resize:
                // https://github.com/krispo/angular-nvd3/issues/40
                if (nvD3Chart && _.isfunction(nvD3Chart.update)) {
                  nv.utils.windowResize(nvD3Chart.update);
                }

                // Other workaround(see above).
                $timeout(forceRedraw);
              } else {
                $timeout(drawGaugeChart, 100);
              }
            }

            // This is done due to a known issue in nvd3, we force a resize:
            // https://github.com/krispo/angular-nvd3/issues/40
            function forceRedraw() {
              $timeout(function () {
                $window.dispatchEvent(new Event('resize'));

                if (nvD3Chart && _.isfunction(nvD3Chart.update)) {
                  nv.utils.windowResize(nvD3Chart.update);
                }
              }, 0);
            }

            $scope.$watch('rxConfiguration.propertiesByName.expression', initialize);
          }
        };
      })
})();