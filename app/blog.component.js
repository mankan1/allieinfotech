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
var BlogComponent = (function () {
    function BlogComponent(router) {
        this.router = router;
        this.title = 'CONSULTANCY SERVICES';
        this.description = 'Provide highly skilled consultants onsite.';
        this.content = 'Fortune 500 companies engage with Allie Info Tech to seek highly skilled resources for engineering and business needs. Do you have a tight deadline to meet ? or you need longterm professional engineering or business resources ?. We can provide highly skilled, experienced and successful engineers and implementation partners onsite to help speed up development and engineering. Allie Info Tech engineers and consultants have worked along side engineers from tech companies like Google, Apple and Facebook. For enquiries please reach out to info@allieinfotech.com, manoj@allieinfotech.com(President), katy.clemens@allieinfotech.com.';
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'my-blog',
            templateUrl: 'html/blog.component.html',
            styleUrls: ['css/blog.component.css',
                'css/app.component.css']
        }),
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map
