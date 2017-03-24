"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ProperStatus(control) {
    var statusArray = ["IDLE", "OFFLINE", "BUSY", "AVAILABLE", "AWAY"];
    if (control.value && statusArray.indexOf(control.value.toUpperCase()) === -1) {
        return { invalidStatus: true };
    }
}
exports.ProperStatus = ProperStatus;
//# sourceMappingURL=status.validator.js.map