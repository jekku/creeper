'use strict';

var movements = require('./lib/movements.js'),
    _ = require('lodash'),
    sleeper = require('sleep'),

    start = function () {
        var random_move_index;
        while(true) {
            sleeper.usleep(_.random(0,5000));
            random_move_index = _.random(0,3);

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

                case 3 :
                    movements.do_click();
                break;
            }
        }
    };

start();
