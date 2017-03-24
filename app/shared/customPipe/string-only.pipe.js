"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringOnlyPipe = (function () {
    function StringOnlyPipe() {
    }
    StringOnlyPipe.prototype.transform = function (inputStr) {
        if (inputStr === undefined || inputStr === "") {
            return inputStr;
        }
        else {
            return inputStr.replace(/\d+/g, "");
        }
    };
    return StringOnlyPipe;
}());
exports.StringOnlyPipe = StringOnlyPipe;
//# sourceMappingURL=string-only.pipe.js.map