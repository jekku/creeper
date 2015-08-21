'use strict';

var movements = require('./lib/movements.js'),

    start = function () {
        while(true) {
            movements.move_vertical(5);
            movements.move_horizontal(5);
        }
    };

start();

