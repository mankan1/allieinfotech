import {Component, OnInit}  from '@angular/core';
import { Router }           from '@angular/router-deprecated';

@Component({
    selector: 'my-blog',
    templateUrl: 'html/blog.component.html',
    styleUrls: ['css/blog.component.css', 
    'css/app.component.css']
})
export class BlogComponent implements OnInit { 
    title = 'Consulting Services';
    description = 'Provide highly skilled consultants onsite.';
    content = 'Fortune 500 companies engage with Allie Info Tech to seek highly skilled resources for engineering and business needs. Do you have a tight deadline to meet ? or you need longterm professional engineering or business resources ?. We can provide highly skilled, experienced and successful engineers and implementation partners onsite to help speed up development and engineering. Allie Info Tech engineers and consultants have worked along side engineers from tech companies like Google, Apple and Facebook. For enquiries please reach out to info@allieinfotech.com, manoj@allieinfotech.com(President), katy.clemens@allieinfotech.com';

    constructor(private router: Router) { }

    ngOnInit() {
    }
}
