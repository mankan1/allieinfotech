import {Component, OnInit}  from '@angular/core';
import { Router }           from '@angular/router-deprecated';

@Component({
    selector: 'my-references',
    templateUrl: 'html/references.component.html',
    styleUrls: ['css/references.component.css', 
    'css/app.component.css']
})
export class ReferencesComponent implements OnInit { 
    title = 'Android & IOS Apps';
    description = 'Development of Android and IOS Apps';
    content = 'Allie Info Tech expertise and experience in developing immersive native Android and IOS apps for Enterprises has helped companies meet goals both in terms of revenue and increased user activity with the products. We have experience in developing apps for Fortune 500 companies and Financial Banks. Our app design, developement and testing effort for Yum Brands has created a unique way of engagement with users in the retail industry. If you have app development needs either for StartUp  proof of concept to full blown enterprise solutions you may reach out to - info@allieinfotech.com, and we will be happy to engage with you. For enquiries email at info@allieinfotech.com.';

    constructor(private router: Router) { }

    ngOnInit() {
    }
}
