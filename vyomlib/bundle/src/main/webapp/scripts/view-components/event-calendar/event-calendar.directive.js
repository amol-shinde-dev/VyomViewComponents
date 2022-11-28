(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.event-calendar')
        .directive('comVyomVyomlibEventCalendar',

            function (rxNotificationMessage, rxRecordInstanceDataPageResource, rxRecordInstanceResource, rxGUID, $window, rxCurrentUser, $sce, rxViewComponentEventManager, $document, $timeout, rxString) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/event-calendar/com-vyom-vyomlib-event-calendar.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope, $element) {
                        var _config,
                            eventManager = rxViewComponentEventManager.getInstance($scope);




                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName,

                                $scope.RecordDefinition = _config.recordDefinitionFullName;
                            $scope.eventName = _config.eventName;
                            $scope.url = _config.url;
                            $scope.startDate = _config.startDate;
                            $scope.endDate = _config.endDate;
                            $scope.filterExp = _config.filterExp;
                            $scope.buttonGuid = _config.buttonGuid;
                            $scope.availabiltySeats = _config.availabiltySeats;




                            $scope.data = [];
                            $scope.mydata = [];
                            /*{
    id: "",
    title: 'Click for Google',
    url: 'https://google.com/',
    start: '2015-02-28',
    end: "",
}*/


                            angular.element(document).ready(function () {
                                $scope.currentDay = moment();
                                $element.find('#calendar').fullCalendar({
                                    header: {
                                        left: 'prev,today',
                                        center: 'title',
                                        //right: 'month,agendaWeek,agendaDay'
                                        right: 'next'
                                    },
                                    defaultDate: $scope.currentDay,
                                    // defaultView: 'basicWeek',

                                    editable: false,
                                    eventLimit: true, // allow "more" link when too many events
                                    events: $scope.data,
                                    eventClick: function (event, jsEvent, view) {
                                        $scope.executeAction($scope.buttonGuid);
                                        $scope.setSelectedEventInstanceId(event.id);

                                    }
                                });
                                $scope.getEvents();
                                $element.find('#calendar').on('click', '.fc-next-button', function () {
                                    //alert('clicked');
                                    $element.find('#calendar').fullCalendar('removeEvents');
                                    $element.find('#calendar').fullCalendar('addEventSource', $scope.newData);
                                });
                                $element.find('#calendar').on('click', '.fc-prev-button', function () {
                                    //alert('clicked');
                                    $element.find('#calendar').fullCalendar('removeEvents');
                                    $element.find('#calendar').fullCalendar('addEventSource', $scope.data);
                                });
                            });





                        };



                        $scope.renderCalender = function () {
                            $element.find('#calendar').fullCalendar('removeEvents');
                            $element.find('#calendar').fullCalendar('addEventSource', $scope.data);
                        }


                        // <!----------- buit in functions------------------>

                        $scope.getEvents = function () {
                            $scope.queryParams = {
                                queryExpression: $scope.filterExp ? $scope.filterExp : "",
                                sortBy: -3

                            };


                            $scope.eventDataPromise = rxRecordInstanceDataPageResource.withName($scope.RecordDefinition).get(800, 0, $scope.queryParams).then(
                                function (allRecords) {
                                    $scope.mydata = allRecords.data;
                                    _.each($scope.mydata, function (singleobj) {
                                        $scope.data.push($scope.objectCreation(singleobj));
                                    });
                                    $scope.renderCalender();
                                }
                            );

                        }


                        $scope.objectCreation = function (obj) {

                            var tempAvailabiltySeats = obj[$scope.availabiltySeats] ? "[" + obj[$scope.availabiltySeats] + "]" : "";
                            return _.assign({}, {
                                id: obj[179],
                                title: obj[$scope.eventName] + "" + tempAvailabiltySeats,
                                url: obj[$scope.url],
                                start: obj[$scope.startDate],
                                end: obj[$scope.endDate],
                            });
                        }


                        $scope.setSelectedEventInstanceId = function (recInstanceID) {
                            // trigger the change property event
                            eventManager.propertyChanged({
                                property: 'eventInstanceId', // name of the property that changed
                                newValue: recInstanceID
                            });


                        }

                        $scope.executeAction = function (guid) {

                            $timeout(function () {
                                var button;


                                var buttonGuid = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', guid);

                                button = $document.find(buttonGuid);


                                if (button) {
                                    button.click();
                                } else {
                                    rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid);
                                }
                            });
                        }


                        function refreshEvent(params) {


                        }

                        // Overriding the view component refresh method to use our own
                        // to refresh the calendar.
                        $scope.rxConfiguration.api = {
                            refresh: refreshEvent.bind(null, true)
                        };

                        eventManager.propertyChanged({
                            property: 'api',
                            newValue: $scope.rxConfiguration.api
                        });



                        init();


                    }

                };
            });
})();
