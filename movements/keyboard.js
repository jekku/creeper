'use strict';

var config = require('../config/config.js'),
    robot = require('robotjs');

exports.press_simultaneous = function (array) {
    array.forEach(function(keypress) {
        robot.keyToggle(keypress,true);
    });

    array.forEach(function(keypress) {
        robot.keyToggle(keypress,false);
    });
};

exports.do_shortcut = function (shortcut_code) {
    if(!config.keyboard_shortcuts[shortcut_code]) {
        return console.err('Shortcut code ' + shortcut_code 
                            + ' does not exist.');
    }
    exports.press_simultaneous(config.keyboard_shortcuts[shortcut_code]);
};
