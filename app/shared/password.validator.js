"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function matchingPasswords(passwordKey, confirmPasswordKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    };
}
exports.matchingPasswords = matchingPasswords;
//# sourceMappingURL=password.validator.js.map