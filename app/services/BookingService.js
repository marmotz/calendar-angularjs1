"use strict";

angular.module('mzCalendar.service.booking', [])
    .factory(
        'BookingService',
        [
            function() {
                function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);

                    return Math.floor(Math.random() * (max - min)) + min;
                }

                var cpt = 1;

                function getRandomBooking(date) {
                    var datetime = new Date(date);
                    datetime.setHours(
                        getRandomInt(9, 18),
                        getRandomInt(0, 4) * 15
                    );

                    return {
                        datetime : datetime,
                        label    : 'Booking #' + (cpt++)
                    };
                }

                return {
                    getByDate: function(date) {
                        var bookings = [];

                        var nbBookings = getRandomInt(0, 10);
                        for (var i = 0; i < nbBookings; i++) {
                            bookings.push(
                                getRandomBooking(date)
                            );
                        }

                        return bookings.sort(
                            function(a, b) {
                                return a.datetime.getTime() - b.datetime.getTime()
                            }
                        );
                    }
                };
            }
        ]
    )
;
