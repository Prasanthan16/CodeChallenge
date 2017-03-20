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
var email_validator_1 = require("../shared/validator/email.validator");
var date_validator_1 = require("../shared/validator/date.validator");
var router_1 = require("@angular/router");
var AddBudComponent = (function () {
    function AddBudComponent(fb, router, route) {
        this.router = router;
        this.route = route;
        this.onSignUp = new core_1.EventEmitter();
        this.budForm = fb.group({
            'userName': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(56)])],
            'emailId': [null, forms_1.Validators.compose([forms_1.Validators.required, email_validator_1.EmailValidator])],
            'status': [null, forms_1.Validators.required],
            'firstName': [null, forms_1.Validators.required],
            'lastName': [null, forms_1.Validators.required],
            'birthday': [null, forms_1.Validators.compose([forms_1.Validators.required, date_validator_1.DateValidator])]
        });
    }
    AddBudComponent.prototype.submitForm = function (value) {
        this.parentData = this.parentData.concat(value);
        this.lgModal.hide();
    };
    return AddBudComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AddBudComponent.prototype, "parentData", void 0);
__decorate([
    core_1.ViewChild('lgModal'),
    __metadata("design:type", Object)
], AddBudComponent.prototype, "lgModal", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddBudComponent.prototype, "onSignUp", void 0);
AddBudComponent = __decorate([
    core_1.Component({
        selector: 'add-bud',
        templateUrl: 'app/buddies/add-buddy.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute])
], AddBudComponent);
exports.AddBudComponent = AddBudComponent;
//# sourceMappingURL=add-buddy.component.js.map