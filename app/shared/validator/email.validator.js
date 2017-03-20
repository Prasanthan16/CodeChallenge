"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function EmailValidator(control) {
    var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (control.value && !emailReg.test(control.value)) {
        return { invalidEmail: true };
    }
}
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=email.validator.js.map