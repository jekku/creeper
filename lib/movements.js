'use strict';

var robot = require('robotjs'),
    mouse_pos;

exports.update_mouse_location = function () {
    mouse_pos = robot.getMousePos();
    console.log("Position now at : " + mouse_pos);
}

exports.move_vertical = function (offset_y) {
    exports.update_mouse_location();
    robot.moveMouse(mouse_pos.x, mouse_pos.y + offset_y);
};

exports.move_horizontal = function (offset_x) {
    exports.update_mouse_location();
    robot.moveMouse(mouse_pos.x + offset_x, mouse_pos.y);
};

exports.move_diagonal = function (offset_x, offset_y) {
    exports.update_mouse_location();
    robot.moveMouse(mouse_pos.x + offset_x, mouse_pos.y + offset_y);
}

exports.do_click = function () {
    robot.mouseClick();
}