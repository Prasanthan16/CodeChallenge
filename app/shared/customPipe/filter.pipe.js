"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (filterObjects, filterStr) {
        if (filterStr === undefined || filterStr === "") {
            return filterObjects;
        }
        else {
            return filterObjects.filter(function (filterObject) {
                return filterObject.firstName.toLowercase().include(filterStr.toLowercase());
            });
        }
    };
    return FilterPipe;
}());
//# sourceMappingURL=filter.pipe.js.map