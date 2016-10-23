"use strict";

angular
    .module(
        'mzCalendar.component.calendar',
        [
            'ngRoute',
            'mzCalendar.service.booking',
        ]
    )
    .config(
        [
            '$routeProvider',
            function($routeProvider) {
                $routeProvider.when(
                    '/calendar',
                    {
                        template: '<mz-calendar></mz-calendar>',
                    }
                );
            }
        ]
    )

    .component(
        'mzCalendar',
        {
            templateUrl : 'components/calendar/calendar.html',
            controller  : [
                'BookingService',
                function(BookingService) {
                    var $ctrl = this;

                    // generate calendar days
                    $ctrl.days = [];

                    for (var i = 0; i < 7; i++) {
                        var date = new Date();
                        date.setDate(date.getDate() + i);

                        $ctrl.days.push(
                            {
                                date     : date,
                                bookings : BookingService.getByDate(date)
                            }
                        );
                    }
                }
            ]
        }
    )
;
