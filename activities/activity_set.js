'use strict';

var mouse = require('../movements/mouse.js'),
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
                mouse.move_vertical(get_random_in_range(move_length));
            break;

            case 1 :
                mouse.move_horizontal(get_random_in_range(move_length));
            break;

            case 2 :
                mouse.move_diagonal(
                    get_random_in_range(move_length), 
                    get_random_in_range(move_length)
                );
            break;

            case 3 :
                if(can_click) {
                    mouse.do_click();
                }
            break;
        }
    }
};
