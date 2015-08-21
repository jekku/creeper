'use strict';

exports.press_simultaneous = function (array) {
    array.forEach(function(keypress) {
        robot.keyToggle(keypress,true);
    });

    array.forEach(function(keypress) {
        robot.keyToggle(keypress,false);
    });
};
