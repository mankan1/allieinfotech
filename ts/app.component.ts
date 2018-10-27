import { Component }                                        from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { PageinfoService }                                  from './pageinfo.service';

import { ServicesComponent }                                from './services.component';
import { ReferencesComponent }                              from './references.component';
import { CompanyComponent }                                 from './company.component';
import { BlogComponent }                                    from './blog.component';
import { ContactComponent }                                 from './contact.component';


@Component({
    selector: 'my-app',
    templateUrl: 'html/app.component.html',
    styleUrls: ['css/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS, 
        PageinfoService
    ]
})

@RouteConfig([
    {
        path: '/implementation',
        name: 'Services',
        component: ServicesComponent,
        useAsDefault: true
    },
    {
        path: '/androidios',
        name: 'References',
        component: ReferencesComponent
    },
    {
        path: '/professionalservices',
        name: 'Company',
        component: CompanyComponent
    },
    {
        path: '/consulting',
        name: 'Blog',
        component: BlogComponent
    },
    {
        path: '/products',
        name: 'Contact',
        component: ContactComponent
    }
])

export class AppComponent {
    title: string = "Company";
    showMenuScreen = false;

    constructor(private pageinfoService: PageinfoService) {
    }

    // SetTitle() {
    //     this.title = this.pageinfoService.getTitle();
    // }

    MenuToggle() {
        this.showMenuScreen = !this.showMenuScreen;
        console.log("showMenuScreen: " + this.showMenuScreen);
    }

    MenuOff() {
        this.showMenuScreen = false;
    }
}
