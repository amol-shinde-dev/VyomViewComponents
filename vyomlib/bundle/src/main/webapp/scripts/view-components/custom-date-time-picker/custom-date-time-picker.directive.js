(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.custom-date-time-picker').directive('comVyomVyomlibCustomDateTimePicker',
        function (rxViewComponentEventManager) {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/custom-date-time-picker/com-vyom-vyomlib-custom-date-time-picker.directive.html',

                scope: {
                    rxConfiguration: '='
                },
                require: '^form',

                link: function ($scope, $element) {
                    var _config;
                    _config = $scope.rxConfiguration.propertiesByName;
                    var eventManager = rxViewComponentEventManager.getInstance($scope);
                    var timezone = new Date().getTimezoneOffset();

                    $scope.isRequiredField = _config.isRequiredField == 'true' ? "d-textfield_required" : "";

                    $scope.data = {
                        date: ""
                    };



                    $scope.today = function () {
                        return new Date();
                    };
                    $scope.data.date = _config.value ? _config.value : $scope.today();


                    // Disable weekend selection
                    function disabled(data) {

                        var mode = data.mode,
                            date = data.date;
                        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
                    };




                    $scope.open = function ($event) {
                        $event.stopPropagation();
                        $scope.status.opened = true;
                    };

                    $scope.setDate = function (year, month, day) {
                        $scope.data.date = new Date(year, month, day);
                    };

                    $scope.dateOptions = {
                        minDate: new Date(),
                        maxDate: new Date(2050, 5, 22),
                        dateDisabled: disabled,
                        formatYear: 'yy',
                        startingDay: 1
                    };

                    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate', 'YYYY-mm-dd HH:mm:ss'];
                    $scope.format = $scope.formats[4];

                    $scope.status = {
                        opened: false
                    };

                    $scope.$watch("rxConfiguration.propertiesByName.value", function (obj) {

                        $scope.data.date = obj ? new Date(obj) : null;

                    });

                    $scope.$watch("rxConfiguration.propertiesByName.minDate", function (obj) {

                        $scope.dateOptions.minDate = obj ? new Date(obj) : new Date();

                    });

                    $scope.$watch("rxConfiguration.propertiesByName.maxDate", function (obj) {

                        $scope.dateOptions.maxDate = obj ? new Date(obj) : new Date(2050, 5, 22);

                    });

                    $scope.setOutput = function () {
                        var selectedYear = new Date($scope.data.date).getFullYear();
                        var selectedMonth = new Date($scope.data.date).getMonth();
                        var nextMonth = selectedMonth + 1;
                        var selectedDate = new Date($scope.data.date).getDate();

                        eventManager.propertyChanged({
                            property: 'dateOutput', // name of the property that changed
                            newValue: moment(selectedYear + "-" + nextMonth + "-" + selectedDate).format("YYYY-MM-DD")
                        });

                        eventManager.propertyChanged({
                            property: 'dateTimeOutput', // name of the property that changed
                            newValue: new Date($scope.data.date).toISOString()
                        });

                        eventManager.propertyChanged({
                            property: 'currentTimezone', // name of the property that changed
                            newValue: timezone
                        });
                    }

                    //end
                }
            };
        });
})();
