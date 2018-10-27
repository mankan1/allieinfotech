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
var ReferencesComponent = (function () {
    function ReferencesComponent(router) {
        this.router = router;
        this.title = 'Android & IOS Apps';
        this.description = 'Development of Android and IOS Apps';
        this.content = 'Allie Info Tech expertise and experience in developing immersive native Android and IOS apps for Enterprises has helped companies meet goals both in terms of revenue and increased user activity with the products. We have experience in developing apps for Fortune 500 companies and Financial Banks. Our app design, developement and testing effort for Yum Brands has created a unique way of engagement with users in the retail industry. If you have app development needs either for StartUp  proof of concept to full blown enterprise solutions you may reach out to - info@allieinfotech.com, and we will be happy to engage with you. For enquiries email at info@allieinfotech.com.';
    }
    ReferencesComponent.prototype.ngOnInit = function () {
    };
    ReferencesComponent = __decorate([
        core_1.Component({
            selector: 'my-references',
            templateUrl: 'html/references.component.html',
            styleUrls: ['css/references.component.css',
                'css/app.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], ReferencesComponent);
    return ReferencesComponent;
}());
exports.ReferencesComponent = ReferencesComponent;
//# sourceMappingURL=references.component.js.map