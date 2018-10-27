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
    title = 'Implementation Partners';
    description = 'We offer many kinds of Software Implementation services.'
    content = 'We offer end to end software development and support services for your needs. Allie Info Tech services include gathering complex business requirements, software design and development. Allie Info Tech development strategy includes test driven development. Allie Info Tech seasonal developers write unit tests during development to build fail proof systems. We are on par with the latest technological advancements in Artificial Intelligence and Machine Learning, applying AI at any opportunity we see value in. We contribute to our clients needs during integration and user acceptment testing. Allie Info Tech engineers think through the problems and come up with optimal solutions during design and develpment making Software Systems highly reliable and scalable. We are heavy into Open source projects, contributing and giving back to the community. Allie Info Tech foucs is in development of Android, IOS apps with great user experience. We have experience in building complex Infrastructure systems in C++, Java and Web Technologies. For enquiries email at info@allieinfotech.com, manoj@allieinfotech.com(President), katy.clemens@allieinfotech.com';

    constructor(private router: Router) {
     }

    ngOnInit() {      
    }
}
