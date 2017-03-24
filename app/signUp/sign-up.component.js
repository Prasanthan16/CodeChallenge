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
var password_validator_1 = require("../shared/validator/password.validator");
var date_validator_1 = require("../shared/validator/date.validator");
var email_validator_1 = require("../shared/validator/email.validator");
var router_1 = require("@angular/router");
var SignUpComponent = (function () {
    function SignUpComponent(fb, router, route) {
        this.router = router;
        this.route = route;
        this.birthdayPickerOptions = {
            dateFormat: 'mm/dd/yyyy',
            alignSelectorRight: true
        };
        this.onSignUp = new core_1.EventEmitter();
        this.signUpForm = fb.group({
            'userName': [null, forms_1.Validators.compose([forms_1.Validators.required, email_validator_1.EmailValidator, forms_1.Validators.maxLength(56)])],
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'confirmPassword': [null, forms_1.Validators.required],
            'firstName': [null, forms_1.Validators.required],
            'lastName': [null],
            'birthday': [null, forms_1.Validators.compose([forms_1.Validators.required, date_validator_1.DateValidator])]
        }, { validator: password_validator_1.MatchingPasswords('password', 'confirmPassword') });
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.userName = params['userName'];
        });
    };
    SignUpComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    SignUpComponent.prototype.setDate = function () {
        // Set today date using the setValue function
        var date = new Date();
        this.signUpForm.setValue({ birthday: {
                date: {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDate()
                }
            } });
    };
    SignUpComponent.prototype.clearDate = function () {
        // Clear the date using the setValue function
        this.signUpForm.setValue({ birthday: '' });
    };
    SignUpComponent.prototype.onlyText = function (evt) {
        var keyCode = (evt.which) ? evt.which : evt.keyCode;
        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32) {
            return false;
        }
        else {
            return true;
        }
    };
    SignUpComponent.prototype.submitForm = function (value) {
        console.log('Reactive Form Data:');
        this.lgModal.show();
        this.userName = value.userName;
        this.onSignUp.emit(value.userName);
    };
    SignUpComponent.prototype.confirm = function () {
        this.router.navigate(['/home', this.userName]);
    };
    return SignUpComponent;
}());
__decorate([
    core_1.ViewChild('lgModal'),
    __metadata("design:type", Object)
], SignUpComponent.prototype, "lgModal", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SignUpComponent.prototype, "onSignUp", void 0);
SignUpComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/signUp/sign-up.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map