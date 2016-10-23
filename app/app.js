'use strict';

angular
    .module(
        'mzCalendar',
        [
            'ngRoute',
            'mzCalendar.component.calendar',
        ]
    )
    .config(
        [
            '$locationProvider', '$routeProvider',
            function($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');

                $routeProvider.otherwise({
                    redirectTo: '/calendar'
                });
            }
        ]
    )
;
