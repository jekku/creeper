'use strict';

var do_some = require('./activities/activity_set.js'),

    start = function () {
        do_some.erratic_mouse(100, 5000, true);
    };

start();
