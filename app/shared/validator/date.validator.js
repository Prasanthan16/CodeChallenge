"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function DateValidator(control) {
    var dateRegexp = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/, formattedDate = control.value ? control.value.formatted : "";
    if (!dateRegexp.test(formattedDate)) {
        return { invalidDate: true };
    }
    else if (dateRegexp.test(formattedDate)) {
        var userDate = new Date(formattedDate);
        var currentDate = new Date(), yearsConvertor = 31536000000;
        if (currentDate < userDate) {
            return { invalidDate: true };
        }
        else {
            var ageOfUser = Math.round(((+currentDate) - (+userDate)) / yearsConvertor);
            if (ageOfUser < 14 || ageOfUser > 150) {
                return { invalidDate: true };
            }
        }
        //control.value = userDate.toISOString();
    }
}
exports.DateValidator = DateValidator;
//# sourceMappingURL=date.validator.js.map