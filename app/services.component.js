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
var ServicesComponent = (function () {
    function ServicesComponent(router) {
        this.router = router;
        this.title = 'WHAT WE DO';
        this.description = 'Every business has an engagement opportunity.';
        this.content = 'Allie Info Tech is a digital engagement provider that helps the world’s leading brands show they care to the people who matter most. Our collective team of consultants, designers, developers, cloud advisors, and data scientists is driven by the human experience. It leads us to the “why” for your users, the “how” for your business today, and the “what could be” of tomorrow.For enquiries email at info@allieinfotech.com, manoj@allieinfotech.com(President), katy.clemens@allieinfotech.com.'
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        core_1.Component({
            selector: 'my-services',
            templateUrl: 'html/services.component.html',
            styleUrls: ['css/services.component.css', 'css/app.component.css'],
            pipes: []
        }),
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], ServicesComponent);
    return ServicesComponent;
}());
exports.ServicesComponent = ServicesComponent;
//# sourceMappingURL=services.component.js.map
