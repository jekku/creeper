'use strict';

var movements = require('./lib/movements.js'),
    _ = require('lodash'),

    start = function () {
        while(true) {
            movements.move_vertical(_.random(-100,100));
            movements.move_horizontal(_.random(-100,100));
        }
    };

start();

