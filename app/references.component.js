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
        this.title = 'SERVICES';
        this.description = 'Strategy | Experience Design | Product Engineering | Cloud Services | Analytics';
        this.content = 'Allie Info Tech’s end-to-end digital engagement services empower our clients to envision, deliver, and continuously improve compelling experiences. We understand that every client’s transformation journey is unique and start wherever they are, focusing on the right channels and endpoints at the right time for each brand.';
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
