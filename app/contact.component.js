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
var ContactComponent = (function () {
    function ContactComponent(router) {
        this.router = router;
        this.title = 'PRODUCTS';
        this.description = 'Androd & IOS apps | Product Engineering';
        this.content = 'Allie Info Tech products speak for themselves. Our published IOS games with our sister company www.onetaxicabs.com are on the appstore. The apps include Three Letter Words, an immersive word game to help improve your vocabulary in a fun way. New Word Search - a word search game with a grid of alphabets with stunning animation. Other games include Word Match Puzzle, Match Lines, Make Matching Lines and Jigsaw Puzzle Picture. To learn more about our apps please visit - https://itunes.apple.com/us/developer/manoj-kandlikar/id870007081. For enquiries email at info@allieinfotech.com, manoj@allieinfotech.com(President), katy.clemens@allieinfotech.com.';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'my-contact',
            templateUrl: 'html/contact.component.html',
            styleUrls: ['css/contact.component.css',
                'css/app.component.css']
        }),
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map
