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
        this.title = 'INDUSTRY EXPERTISE';
        this.description = 'Many Industries, One Consumer';
        this.content = 'We take pride in our strong vertical expertise. But we also know that insights from the solutions we have delivered help us to help all of our clients. Todays consumers expect each brand interaction to be seamless and intuitive, no matter the industry. We translate our cross-industry learnings into better solutions for all, because that's what we're best at - creating experiences for todays digital users.';
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
