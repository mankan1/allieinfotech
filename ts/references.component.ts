import {Component, OnInit}  from '@angular/core';
import { Router }           from '@angular/router-deprecated';

@Component({
    selector: 'my-references',
    templateUrl: 'html/references.component.html',
    styleUrls: ['css/references.component.css', 
    'css/app.component.css']
})
export class ReferencesComponent implements OnInit { 
    title = 'SERVICES';
    description = 'Strategy | Experience Design | Product Engineering | Cloud Services | Analytics';
    content = 'Allie Info Tech’s end-to-end digital engagement services empower our clients to envision, deliver, and continuously improve compelling experiences. We understand that every client’s transformation journey is unique and start wherever they are, focusing on the right channels and endpoints at the right time for each brand.';

    constructor(private router: Router) { }

    ngOnInit() {
    }
}
