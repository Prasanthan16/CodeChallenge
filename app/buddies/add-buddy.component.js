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
var enum_form_1 = require("../shared/enums/enum-form");
var AddBudComponent = (function () {
    function AddBudComponent() {
        this.callForm = enum_form_1.FORM_TYPE.BUDDY;
        this.onAdd = new core_1.EventEmitter();
    }
    AddBudComponent.prototype.showBuddy = function () {
        this.lgModal.show();
        this.userForm.clearDate();
    };
    AddBudComponent.prototype.callAccordion = function (event) {
        this.accordian.toggleOpen(event);
    };
    AddBudComponent.prototype.onEnd = function (value) {
        value["DOB"] = value.birthday.formatted;
        this.parentData = this.parentData.concat(value);
        this.onAdd.emit(this.parentData);
        this.lgModal.hide();
    };
    return AddBudComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AddBudComponent.prototype, "parentData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AddBudComponent.prototype, "formLable", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddBudComponent.prototype, "onAdd", void 0);
__decorate([
    core_1.ViewChild('lgModal'),
    __metadata("design:type", Object)
], AddBudComponent.prototype, "lgModal", void 0);
__decorate([
    core_1.ViewChild('userForm'),
    __metadata("design:type", Object)
], AddBudComponent.prototype, "userForm", void 0);
__decorate([
    core_1.ViewChild('group'),
    __metadata("design:type", Object)
], AddBudComponent.prototype, "accordian", void 0);
AddBudComponent = __decorate([
    core_1.Component({
        selector: 'add-bud',
        templateUrl: 'app/buddies/add-buddy.component.html'
    }),
    __metadata("design:paramtypes", [])
], AddBudComponent);
exports.AddBudComponent = AddBudComponent;
//# sourceMappingURL=add-buddy.component.js.map