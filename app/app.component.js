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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var pageinfo_service_1 = require('./pageinfo.service');
var services_component_1 = require('./services.component');
var references_component_1 = require('./references.component');
var company_component_1 = require('./company.component');
var blog_component_1 = require('./blog.component');
var contact_component_1 = require('./contact.component');
var AppComponent = (function () {
    function AppComponent(pageinfoService) {
        this.pageinfoService = pageinfoService;
        this.title = "Company";
        this.showMenuScreen = false;
    }
    // SetTitle() {
    //     this.title = this.pageinfoService.getTitle();
    // }
    AppComponent.prototype.MenuToggle = function () {
        this.showMenuScreen = !this.showMenuScreen;
        console.log("showMenuScreen: " + this.showMenuScreen);
    };
    AppComponent.prototype.MenuOff = function () {
        this.showMenuScreen = false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'html/app.component.html',
            styleUrls: ['css/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                pageinfo_service_1.PageinfoService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/implementation',
                name: 'Services',
                component: services_component_1.ServicesComponent,
                useAsDefault: true
            },
            {
                path: '/androidios',
                name: 'References',
                component: references_component_1.ReferencesComponent
            },
            {
                path: '/professionalservices',
                name: 'Company',
                component: company_component_1.CompanyComponent
            },
            {
                path: '/consulting',
                name: 'Blog',
                component: blog_component_1.BlogComponent
            },
            {
                path: '/products',
                name: 'Contact',
                component: contact_component_1.ContactComponent
            }
        ]), 
        __metadata('design:paramtypes', [pageinfo_service_1.PageinfoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map