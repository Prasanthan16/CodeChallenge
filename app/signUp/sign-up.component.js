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
var router_1 = require("@angular/router");
var enum_form_1 = require("../shared/enums/enum-form");
var SignUpComponent = (function () {
    function SignUpComponent(router, route) {
        this.router = router;
        this.route = route;
        this.callForm = enum_form_1.FORM_TYPE.SIGN_IN;
        this.onSignUp = new core_1.EventEmitter();
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
    SignUpComponent.prototype.confirm = function () {
        this.router.navigate(['/home', this.userName]);
    };
    SignUpComponent.prototype.onEnd = function (value) {
        this.userName = value.userName;
        this.lgModal.show();
    };
    return SignUpComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SignUpComponent.prototype, "onSignUp", void 0);
__decorate([
    core_1.ViewChild('lgModal'),
    __metadata("design:type", Object)
], SignUpComponent.prototype, "lgModal", void 0);
SignUpComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/signUp/sign-up.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map