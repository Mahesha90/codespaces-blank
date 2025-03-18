"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.panelContents = "";
    }
    Calculator.prototype.pressButton = function (b) {
        this.panelContents += b;
    };
    Calculator.prototype.getPanelContents = function () {
        return this.panelContents;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
