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
var CompanyComponent = (function () {
    function CompanyComponent(router) {
        this.router = router;
        this.title = 'Professional Services';
        this.description = 'Providing Professional Service resources onsite.';
        this.content = 'We have highly skilled and qualified software engineering resources to help with development and maintenence of your complex software systems. Allie info Tech engineers go through screening on computer science fundamentals and enterprise and startup experience to fulfill the demands of engineering your products. Allie Info Tech resources have proven experience in silicon valley companies like Google, Apple and Facebook. Allie Info Tech resources have helped build distributed infrastructure for these enterprises and have found solutions to the most challenging problems these companies face along side their engineers. If you have startup needs or enterprise needs in technology , financial services and are looking for implementaion partners or just resources in development , testing or infrastructure please reach out to info@allieinfotech.com';
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = __decorate([
        core_1.Component({
            selector: 'my-company',
            templateUrl: 'html/company.component.html',
            styleUrls: ['css/company.component.css',
                'css/app.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], CompanyComponent);
    return CompanyComponent;
}());
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=company.component.js.map