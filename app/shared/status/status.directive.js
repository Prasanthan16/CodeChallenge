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
var StatusDirective = (function () {
    function StatusDirective(el) {
        this.el = el;
        this.el = el;
        switch (this.bgColor) {
            case 'OFFLINE':
                this.el.nativeElement.style.backgroundColor = "#DCDCDC";
                break;
            case 'IDLE':
                this.el.nativeElement.style.backgroundColor = "yellow";
                break;
            case 'IDLE':
                this.el.nativeElement.style.backgroundColor = "#FF0000";
                break;
            case 'AVAILABLE':
                this.el.nativeElement.style.backgroundColor = "#ADFF2F";
                break;
            default:
                this.el.nativeElement.style.backgroundColor = "black";
                break;
        }
    }
    return StatusDirective;
}());
__decorate([
    core_1.Input('myHighlight'),
    __metadata("design:type", String)
], StatusDirective.prototype, "bgColor", void 0);
StatusDirective = __decorate([
    core_1.Directive({
        selector: '[statusSign]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], StatusDirective);
exports.StatusDirective = StatusDirective;
//# sourceMappingURL=status.directive.js.map