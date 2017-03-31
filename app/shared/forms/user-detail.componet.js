"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var status_validator_1 = require("../validator/status.validator");
var email_validator_1 = require("../validator/email.validator");
var date_validator_1 = require("../validator/date.validator");
var password_validator_1 = require("../validator/password.validator");
var router_1 = require("@angular/router");
var enum_form_1 = require("../enums/enum-form");
var CommonFormComponet = (function () {
    function CommonFormComponet(fb, router, route) {
        this.router = router;
        this.route = route;
        this.onEnd = new core_1.EventEmitter();
        this.birthdayPickerOptions = {
            dateFormat: 'mm/dd/yyyy',
            alignSelectorRight: true
        };
        this.commonFormGroup = fb.group({
            'userName': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(56), email_validator_1.EmailValidator])],
            'firstName': [null, forms_1.Validators.required],
            'lastName': [null, forms_1.Validators.required],
            'birthday': [null, forms_1.Validators.compose([forms_1.Validators.required, date_validator_1.DateValidator])]
        });
    }
    CommonFormComponet.prototype.ngOnInit = function () {
        console.log("there");
        if (this.formLable === enum_form_1.FORM_TYPE.SIGN_IN) {
            this.commonFormGroup.addControl("password", new forms_1.FormControl(null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])));
            this.commonFormGroup.addControl("confirmPassword", new forms_1.FormControl(null, forms_1.Validators.required));
            this.commonFormGroup.setValidators(password_validator_1.MatchingPasswords('password', 'confirmPassword'));
            this.signIn = true;
        }
        else if (this.formLable === enum_form_1.FORM_TYPE.BUDDY) {
            this.commonFormGroup.addControl("emailId", new forms_1.FormControl(null, forms_1.Validators.compose([forms_1.Validators.required, email_validator_1.EmailValidator])));
            this.commonFormGroup.addControl("status", new forms_1.FormControl(null, forms_1.Validators.compose([forms_1.Validators.required, status_validator_1.ProperStatus])));
            this.buddy = true;
        }
    };
    CommonFormComponet.prototype.onlyText = function (evt) {
        var keyCode = (evt.which) ? evt.which : evt.keyCode;
        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32) {
            return false;
        }
        else {
            return true;
        }
    };
    CommonFormComponet.prototype.clearDate = function () {
        this.commonFormGroup.setValue({ userName: '', emailId: '', status: '', firstName: '', lastName: '', birthday: '' });
    };
    CommonFormComponet.prototype.onFormSubmit = function (value) {
        this.onEnd.emit(value);
    };
    return CommonFormComponet;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CommonFormComponet.prototype, "formLable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CommonFormComponet.prototype, "onSubmit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CommonFormComponet.prototype, "parentData", void 0);
__decorate([
    core_1.ViewChild('lgModal'),
    __metadata("design:type", Object)
], CommonFormComponet.prototype, "lgModal", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CommonFormComponet.prototype, "confirm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CommonFormComponet.prototype, "onEnd", void 0);
CommonFormComponet = __decorate([
    core_1.Component({
        selector: 'user-form',
        templateUrl: 'app/shared/forms/user-detail.componet.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute])
], CommonFormComponet);
exports.CommonFormComponet = CommonFormComponet;
//# sourceMappingURL=user-detail.componet.js.map