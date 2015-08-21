'use strict';

var movements = require('../lib/movements.js'),
    _ = require('lodash'),
    sleeper = require('sleep');

exports.erratic_mouse = function (move_length, sleep_time, can_click) {
    var random_move_index,

        get_random_in_range =function (length){
            return _.random(-length, length);
        };

    while(true) {
        sleeper.usleep(_.random(0,sleep_time));
        random_move_index = _.random(0,3);

        switch (random_move_index) {
            case 0 :
                movements.move_vertical(get_random_in_range(move_length));
            break;

            case 1 :
                movements.move_horizontal(get_random_in_range(move_length));
            break;

            case 2 :
                movements.move_diagonal(
                    get_random_in_range(move_length), 
                    get_random_in_range(move_length)
                );
            break;

            case 3 :
                if(can_click) {
                    movements.do_click();
                }
            break;
        }
    }
};