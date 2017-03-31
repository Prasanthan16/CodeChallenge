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
var buddy_http_service_1 = require("../service/buddy/buddy.http.service");
var BuddiesListComponent = (function () {
    function BuddiesListComponent(_buddyService) {
        this._buddyService = _buddyService;
        this.callForm = "Buddy";
        this.max = 5;
        this.isReadonly = false;
    }
    ;
    BuddiesListComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    ;
    BuddiesListComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    BuddiesListComponent.prototype.callAccordion = function (event) {
        if (event.target.id == "" && event.target.id !== "parent") {
            event.stopPropagation();
        }
    };
    BuddiesListComponent.prototype.deleteBuddy = function (index) {
        var tmp = Object.create(this.filterData);
        tmp.splice(index, 1);
        this.filterData = tmp;
    };
    BuddiesListComponent.prototype.getBuddies = function () {
        var _this = this;
        this._buddyService.getBuddies()
            .subscribe(function (buddies) { _this.buddies = buddies; _this.filterData = Object.create(_this.buddies); }, function (error) { return _this.errorMessage = error; });
    };
    BuddiesListComponent.prototype.onFilter = function () {
        var _this = this;
        var value = Object.create(this.buddies);
        this.filterBy = this.filterBy ? this.filterBy.toLocaleLowerCase() : null;
        this.filterData = this.filterBy ? value.filter(function (buddy) {
            return buddy.userName.toLocaleLowerCase().indexOf(_this.filterBy) !== -1;
        }) : value;
    };
    BuddiesListComponent.prototype.ngOnInit = function () {
        this.getBuddies();
    };
    return BuddiesListComponent;
}());
BuddiesListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/buddies/buddies-list.component.html',
        providers: [buddy_http_service_1.BuddyService]
    }),
    __metadata("design:paramtypes", [buddy_http_service_1.BuddyService])
], BuddiesListComponent);
exports.BuddiesListComponent = BuddiesListComponent;
//# sourceMappingURL=buddies-list.components.js.map