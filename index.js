'use strict';

var movements = require('./lib/movements.js'),
    _ = require('lodash'),

    start = function () {
        var random_move_index;
        while(true) {
            random_move_index = _.random(0,2);

            switch (random_move_index) {
                case 0 :
                    movements.move_vertical(_.random(-100,100));
                break;

                case 1 :
                    movements.move_horizontal(_.random(-100,100));
                break;

                case 2 :
                    movements.move_diagonal(_.random(-100,100),_.random(-100,100));
                break;
            }
        }
    };

start();

