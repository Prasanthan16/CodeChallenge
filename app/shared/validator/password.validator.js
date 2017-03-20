"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MatchingPasswords(passwordKey, confirmPasswordKey) {
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
exports.MatchingPasswords = MatchingPasswords;
//# sourceMappingURL=password.validator.js.map