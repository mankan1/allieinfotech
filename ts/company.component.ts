import {Component, OnInit}  from '@angular/core';
import { Router }           from '@angular/router-deprecated';

@Component({
    selector: 'my-company',
    templateUrl: 'html/company.component.html',
    styleUrls: ['css/company.component.css', 
    'css/app.component.css']
})
export class CompanyComponent implements OnInit { 
    title = 'Professional Services';
    description = 'Providing Professional Service resources onsite.';
    content = 'We have highly skilled and qualified software engineering resources to help with development and maintenence of your complex software systems. Allie info Tech engineers go through screening on computer science fundamentals and enterprise and startup experience to fulfill the demands of engineering your products. Allie Info Tech resources have proven experience in silicon valley companies like Google, Apple and Facebook. Allie Info Tech resources have helped build distributed infrastructure for these enterprises and have found solutions to the most challenging problems these companies face along side their engineers. If you have startup needs or enterprise needs in technology , financial services and are looking for implementaion partners or just resources in development , testing or infrastructure please reach out to info@allieinfotech.com, manoj@allieinfotech.com(President), katy.clemens@allieinfotech.com';

    constructor(private router: Router) { }

    ngOnInit() {
    }
}
