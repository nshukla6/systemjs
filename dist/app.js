"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calci_1 = require("./calci");
var circle_1 = require("./app/circle");
console.log('hello there');
console.log(calci_1.sum(3, 6));
console.log(circle_1.calculateCircleArea(3));
var basu = ['nitin', 9];
var Color;
(function (Color) {
    Color[Color["GRREN"] = 0] = "GRREN";
    Color[Color["RED"] = 1] = "RED";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var myColor;
Color[Color.BLUE];
console.log(Color[Color.BLUE]);
