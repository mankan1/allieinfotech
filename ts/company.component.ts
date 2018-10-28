import {Component, OnInit}  from '@angular/core';
import { Router }           from '@angular/router-deprecated';

@Component({
    selector: 'my-company',
    templateUrl: 'html/company.component.html',
    styleUrls: ['css/company.component.css', 
    'css/app.component.css']
})
export class CompanyComponent implements OnInit { 
    title = 'INDUSTRY EXPERTISE';
    description = 'Many Industries, One Consumer';
    content = 'We help clients across all industries solve their toughest business problems. By combining domain-specific expertise - and a deep understanding of the consumer - we envision and deliver effortless experiences that drive loyalty, increase order volumes, improve adherence, and accomplish your goals.We take pride in our strong vertical expertise. But we also know that insights from the solutions we've delivered help us to help all of our clients. Today's consumers expect each brand interaction to be seamless and intuitive, no matter the industry. We translate our cross-industry learnings into better solutions for all, because that's what we're best at - creating experiences for today's digital users.';

    constructor(private router: Router) { }

    ngOnInit() {
    }
}
