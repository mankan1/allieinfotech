import {Component, ElementRef, OnInit}  from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { PageinfoService } from './pageinfo.service';

@Component({
    selector: 'my-services',
    templateUrl: 'html/services.component.html',
    styleUrls: ['css/services.component.css', 'css/app.component.css'],
    pipes: []
})
export class ServicesComponent implements OnInit { 
    title = 'WHAT WE DO';
    description = 'Every business has an engagement opportunity.'
    content = 'Allie Info Tech is a digital engagement provider that helps the world’s leading brands show they care to the people who matter most. Our collective team of consultants, designers, developers, cloud advisors, and data scientists is driven by the human experience. It leads us to the “why” for your users, the “how” for your business today, and the “what could be” of tomorrow.For enquiries email at info@allieinfotech.com, manoj@allieinfotech.com(President), katy.clemens@allieinfotech.com.';

    constructor(private router: Router) {
     }

    ngOnInit() {      
    }
}
