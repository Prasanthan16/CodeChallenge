"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ProperStatus(control) {
    var statusReg = /^((IDLE)|(OFFLINE)|(BUSY)|(AVAILABLE)) $/;
    if (control.value && !statusReg.test(control.value)) {
        return { invalidStatus: true };
    }
}
exports.ProperStatus = ProperStatus;
//# sourceMappingURL=status.validator.js.map