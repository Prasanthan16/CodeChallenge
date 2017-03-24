"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var sign_up_component_1 = require("./signUp/sign-up.component");
var buddies_list_components_1 = require("./buddies/buddies-list.components");
var status_directive_1 = require("./shared/status/status.directive");
var status_component_1 = require("./shared/status/status.component");
var add_buddy_component_1 = require("./buddies/add-buddy.component");
var mydatepicker_1 = require("mydatepicker");
//import { StringOnlyPipe } from './shared/customPipe/string-only.pipe';
var ng2_bootstrap_1 = require("ng2-bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            mydatepicker_1.MyDatePickerModule,
            ng2_bootstrap_1.DropdownModule.forRoot(),
            ng2_bootstrap_1.AccordionModule.forRoot(),
            ng2_bootstrap_1.SortableModule.forRoot(),
            ng2_bootstrap_1.RatingModule.forRoot(),
            ng2_bootstrap_1.ModalModule.forRoot(),
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'buddy/:userName', component: buddies_list_components_1.BuddiesListComponent },
                { path: 'signup', component: sign_up_component_1.SignUpComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ])
        ],
        declarations: [
            // StringOnlyPipe,
            app_component_1.AppComponent,
            status_directive_1.StatusDirective,
            status_component_1.StatusComponent,
            welcome_component_1.WelcomeComponent,
            sign_up_component_1.SignUpComponent,
            add_buddy_component_1.AddBudComponent,
            buddies_list_components_1.BuddiesListComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map