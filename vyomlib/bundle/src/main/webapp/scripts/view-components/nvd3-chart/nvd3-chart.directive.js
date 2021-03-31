(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.nvd3-chart').directive('comVyomVyomlibNvd3Chart',
    function ($q,
      $timeout,
      $window,
      RX_ASSOCIATED_RECORD_NODE_SIDES,
      RX_VIEW_COMPONENT,
      rxAssociationInstanceDataPageResource,
      rxDesignerCache,
      rxGUID,
      rxRecordInstanceDataPageResource,
      rxViewComponentEventManager) {
      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/nvd3-chart/com-vyom-vyomlib-nvd3-chart.html',
        scope: {
          rxConfiguration: '='
        },

        link: function ($scope) {
          // http://nvd3.org/examples/pie.html
          var nvD3Chart,
            _config,
            recordDefinitionName,
            colorName,
            colorArr = [],
            height,
            groupByFieldID,
            expression,
            recordDefinition,
            fieldList,
            selectionValues = {},
            fieldIdNameMapping = {},
            requestData = [],
            nvd3Data = [],
            eventManager = rxViewComponentEventManager.getInstance($scope);

          $scope.pieChartConfiguration = {};

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
          $scope.pieChartConfiguration.className = rxGUID.generate('chart');

          // Get parameters from the configuration, set also default values.
          function initialize() {
            nvd3Data = [];
            _config = $scope.rxConfiguration.propertiesByName;
            recordDefinitionName = _config.recordDefinitionName;
            height = _config.height;
            groupByFieldID = _config.groupByFieldID;
            expression = _config.expression;


            $scope.pieChartConfiguration.title = _config.title;
            colorName = _config.color;
            colorArr = colorName.split(',');

            // LMA:: TODO:: Name is not good...
            // fetchDataAndDrawChart(isAssociationUsed);
            fetchDataAndDrawChart();
          }

          // Getting the record definition to get the selection values.
          function fetchDataAndDrawChart() {
            // Get record definition
            rxDesignerCache.getRecordDefinition(recordDefinitionName)
              .then(function (recordDefinitionObject) {
                recordDefinition = recordDefinitionObject;
                fieldList = _.map(recordDefinition.fieldDefinitions, 'id');

                _.forEach(recordDefinition.fieldDefinitions, function (value, key) {
                  fieldIdNameMapping[value.id] = value.name;

                  if (value.resourceType === 'com.bmc.arsys.rx.standardlib.record.SelectionFieldDefinition') {
                    selectionValues[value.id] = value.optionNamesById;
                  }
                });
                fetchRecordDefinitionData();

              });
          }

          // Getting the record instances.
          function fetchRecordDefinitionData() {

            var queryParams = {
              propertySelection: groupByFieldID,
              queryExpression: expression   //"'Description' = \"first\" "
            };

            var foo = rxRecordInstanceDataPageResource.withName(recordDefinitionName);
            foo.get(100, 0, queryParams).then(
              function (recordData) {
                requestData = recordData.data;
                prepareDataForChart();
              }
            );
          }

          // We need to prepare the data the way d3 is expecting them.
          function prepareDataForChart() {
            var data = {};

            nvd3Data = [];

            // Changing selection values to their label.
            _.forEach(requestData, function (value, key) {
              var currentIndex = key;

              _.forEach(value, function (value, key) {
                if (selectionValues.hasOwnProperty(key)) {
                  requestData[currentIndex][key] = selectionValues[key][value];
                }
              })
            });

            // Preparing d3 data
            _.forEach(requestData, function (value, key) {
              if (!data.hasOwnProperty(value[groupByFieldID])) {
                data[value[groupByFieldID]] = 0;
              }
              data[value[groupByFieldID]]++;
            });

            _.forEach(data, function (count, key) {
              nvd3Data.push({
                label: key,
                value: count
              })
            });
            drawPieChart();
          }

          function drawPieChart() {
            // Is the DOM ready? Sometimes the div name is still the AngularJs reference {{cfg.className}}
            // In this case we call the drawing function later.
            if (angular.element('.' + $scope.pieChartConfiguration.className).length + ' svg') {
              // Trying to determine the viewbox proportions using the parent initial proportions.
              // var parentObject = angular.element('.container-' + $scope.pieChartConfiguration.className);

              nvD3Chart = nv.addGraph(function () {
                var nvChart = nv.models.pieChart()
                  .margin({ top: 0, right: 0, bottom: 0, left: 0 })
                  .x(function (d) {
                    return d.label
                  })
                  .y(function (d) {
                    return d.value
                  })
                  .showLabels(true)
                  .labelType(function (d) {
                    return d.value
                  })
                  .donut(true)
                  .color(colorArr)
                  .donutRatio(0.35);

                d3.select('.' + $scope.pieChartConfiguration.className)
                  .datum(nvd3Data)
                  .attr('height', height)
                  .transition().duration(350)
                  .call(nvChart);

                return nvChart;
              });

              // This is done due to a known issue in nvd3, we force a resize:
              // https://github.com/krispo/angular-nvd3/issues/40
              // if (nvD3Chart && _.isfunction(nvD3Chart.update)) {
              //   nv.utils.windowResize(nvD3Chart.update);
              // }

              // Other workaround (see above).
              // $timeout(forceRedraw);
            } else {
              // $timeout(drawPieChart, 100);
            }
          }

          // This is done due to a known issue in nvd3, we force a resize:
          // https://github.com/krispo/angular-nvd3/issues/40
          // function forceRedraw() {
          //   $timeout(function () {
          //     $window.dispatchEvent(new Event('resize'));

          //     if (nvD3Chart && _.isfunction(nvD3Chart.update)) {
          //       nv.utils.windowResize(nvD3Chart.update);
          //     }
          //   }, 0);
          // }

          $scope.$watch('rxConfiguration.propertiesByName.parentInstanceID', initialize);
        }
      };
    })
})();
