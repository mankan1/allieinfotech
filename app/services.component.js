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
        this.title = 'Implementation Partners';
        this.description = 'We offer many kinds of Software Implementation services.';
        this.content = 'We offer end to end software development and support services for your needs. Allie Info Tech services include gathering complex business requirements, software design and development. Allie Info Tech development strategy includes test driven development. Allie Info Tech seasonal developers write unit tests during development to build fail proof systems. We are on par with the latest technological advancements in Artificial Intelligence and Machine Learning, applying AI at any opportunity we see value in. We contribute to our clients needs during integration and user acceptment testing. Allie Info Tech engineers think through the problems and come up with optimal solutions during design and develpment making Software Systems highly reliable and scalable. We are heavy into Open source projects, contributing and giving back to the community. Allie Info Tech foucs is in development of Android, IOS apps with great user experience. We have experience in building complex Infrastructure systems in C++, Java and Web Technologies. For enquiries email at info@allieinfotech.com, manoj@allieinfotech.com(President), katy.clemens@allieinfotech.com.';
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
